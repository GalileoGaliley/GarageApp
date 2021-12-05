import React, {useRef, useState} from "react";
import {
    View,
    Platform,
    UIManager,
    LayoutAnimation,
    StyleSheet,
    Button,
    PanResponder, Animated
} from "react-native";

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Test = () => {
    const [setter, setSetter] = useState(true);
    const pan1 = useRef(new Animated.ValueXY()).current;
    const value = useRef(new Animated.ValueXY()).current;
    let valueX = value.x._value;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan1.setOffset({
                    x: pan1.x._value,
                    y: pan1.y._value
                });
            },
            onPanResponderMove:(event,gestureState)=>{
                pan1.setValue({x:gestureState.dx,y:gestureState.dy});
                value.setValue({x:valueX + pan1.x._value,y:pan11.y})
            },
            onPanResponderRelease: (event,gestureState) => {
                pan1.setValue({x:0,y:gestureState.dy});
                if(gestureState.vx > 0){
                    Animated.spring(
                        value, // Auto-multiplexed
                        { toValue: { x: 50, y: 0 } } // Back to zero
                    ).start();
                    valueX = 50;
                }else if(gestureState.vx < 0){
                    Animated.spring(
                        value, // Auto-multiplexed
                        { toValue: { x: -50, y: 0 } } // Back to zero
                    ).start();
                    valueX = -50;
                }
            }
        })
    ).current;
    const [firstBoxPosition, setFirstBoxPosition] = useState("left");
    const [secondBoxPosition, setSecondBoxPosition] = useState("left");
    const [thirdBoxPosition, setThirdBoxPosition] = useState("left");


    const toggleFirstBox = () => {
        setSetter(!setter)
        if(setter){
            Animated.spring(pan, {toValue: {x: 0, y: 0},useNativeDriver: true}).start();
            return
        }else{
            Animated.spring(pan, {toValue: {x: -100, y: 0},useNativeDriver: true}).start();
            return
        }


    };

    const toggleSecondBox = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        console.log(pan.x)
        if(secondBoxPosition === "left"){
            setSecondBoxPosition( "right");
        }else{
            setSecondBoxPosition("left");
        }
    };

    const toggleThirdBox = () => {

        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setThirdBoxPosition(thirdBoxPosition === "left" ? "right" : "left");
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="EaseInEaseOut" onPress={()=>{
                    console.log(pan)
                }} />
            </View>
            <Animated.View
                style={[
                    {transform: [{translateX: value.x}], width: 300, height: 100, backgroundColor: '#0f0'}
                ]}
                {...panResponder.panHandlers}
            />
            <View style={styles.buttonContainer}>
                <Button title="Linear" onPress={toggleSecondBox} />
            </View>
            <View
                style={[
                    styles.box,
                    secondBoxPosition === "left" ? null : styles.moveRight
                ]}
            />
            <View style={styles.buttonContainer}>
                <Button title="Spring" onPress={toggleThirdBox} />
            </View>
            <View
                style={[
                    styles.box,
                    thirdBoxPosition === "left" ? null : styles.moveRight
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    box: {
        height: 100,
        width: 100,
        borderRadius: 5,
        margin: 8,
        backgroundColor: "blue"
    },
    moveRight: {
        alignSelf: "flex-end"
    },
    buttonContainer: {
        alignSelf: "center"
    }
});

export default Test;