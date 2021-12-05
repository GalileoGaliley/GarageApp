import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from './Screens/HomeScreen';
import { ProfileScreen} from './Screens/ProfileScreen'
import NavBar from "./Components/HomeButton";
import React, {useState, useRef, useEffect, createContext, useContext} from 'react';
import {View, Text, Button, TouchableOpacity, Image, Dimensions, PanResponder, Animated} from "react-native";
import {Header, Icon} from 'react-native-elements';
import Svg, {Circle, G, Path} from "react-native-svg";
import {styles} from "./Styles";
import {Head} from "./Components/Head";
import {AlertOctagon, ArrowLeft, Info, Key, Setting, ShoppingBag, User} from "./Static_Images/IconRNS";
import MenuItem from "./Components/MenuItem";
import {Cart} from "./Screens/Cart";
import {AuthReg} from "./Screens/AuthReg";
import {observer} from "mobx-react-lite";
import WareScreen from "./Screens/WareScreen";
import {Context} from "./App";
import storage from "./storage";
import jwt_decode from "jwt-decode";

const Stack = createNativeStackNavigator();


const Index = observer(({ navigation })=> {
    const {user} = useContext(Context);
    const directMinus = -(Dimensions.get('window').width / 100 * 80);
    const directPlus = -(Dimensions.get('window').width / 100 * 80);
    const pan = useRef(new Animated.ValueXY()).current;
    const value = useRef(new Animated.ValueXY()).current;
    let valueX = value.x._value;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove:(event,gestureState)=>{
                pan.setValue({x:gestureState.dx,y:gestureState.dy});
                value.setValue({x:valueX + pan.x._value,y:pan.y})
            },
            onPanResponderRelease: (event,gestureState) => {
                pan.setValue({x:0,y:gestureState.dy});
                if(gestureState.vx > 0){
                    Animated.spring(
                        value, // Auto-multiplexed
                        { toValue: { x: 0, y: 0 } } // Back to zero
                    ).start();
                    valueX = 0;
                }else if(gestureState.vx < 0){
                    Animated.spring(
                        value, // Auto-multiplexed
                        { toValue: { x: directMinus, y: 0 } } // Back to zero
                    ).start();
                    valueX = directMinus;
                }
            }
        })
    ).current;
    let direct;

    const [scaleBack, setScaleBack] = useState(0);
        // Will change fadeAnim value to 1 in 5 seconds

    useEffect(()=>{
        try {
            storage.load({
                key: 'token',
                autoSync: true,
                syncInBackground: true,
            }).then(ret => {
                let token = jwt_decode(ret);
                user.setUser(token);
                user.setIsAuth(true)
                console.log(user);
            }).catch((e)=>{
                console.log(e)
            });
        }catch (e){
            console.log(e)
        }

    },[])




    return (
                <>
                    <Animated.View
                        style={[
                            styles.sideMenu,
                            {
                                // Bind opacity to animated value
                                transform: [{ translateX: value.x }]
                            }
                        ]}
                        {...panResponder.panHandlers}
                    >
                        <View style={styles.menu}>
                            <View style={[styles.pRelative, styles.headMenu]}>
                                <Image style={[styles.imagesInMenu, styles.pAbsolute]} blurRadius={12} source={require('./Static_Images/112.jpeg')} />
                                <Text style={styles.textLogoMenu}>GARAGE OF THE DAY</Text>

                            </View>
                            <View style={styles.bodyMenu}>
                                <MenuItem title={'КОРЗИНА'} icon={<ShoppingBag width={30} height={30} stroke={'#505050'}/>} call={() =>{navigation.navigate('Cart')}} />
                                {user.isAuth ?
                                    <MenuItem title={'МОЙ ПРОФИЛЬ'} icon={<User width={30} height={30} stroke={'#505050'}/>} call={() =>{navigation.navigate('Profile')}}/>
                                    :
                                    <MenuItem title={'ВХОД/РЕГИСТРАЦИЯ'} icon={<Key width={30} height={30} stroke={'#505050'}/>} call={() =>{navigation.navigate('Auth')}}/>

                                }
                                <MenuItem title={'НАСТРОЙКИ'} icon={<Setting width={30} height={30} call={() =>{navigation.navigate('Cart')}} stroke={'#505050'} />}/>
                                <MenuItem title={'О НАС'} icon={<Info width={30} height={30} stroke={'#505050'}/>} call={() =>{navigation.navigate('AboutUs')}}/>


                                <View style={{marginTop:5, backgroundColor: '#fff',  height:50, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{ color:'#aaa', fontSize:20, textTransform:'uppercase'}}>
                                        Расскажите, что вы думаете?
                                    </Text>

                                </View>
                                <View style={{backgroundColor: '#fff',   justifyContent:'center'}}>
                                    <TouchableOpacity onPress={()=>{
                                        console.log('asdmasmodisnjksdcfnjdkscnjksnd')}} style={{ height:40,justifyContent:'center', paddingStart:10}}>
                                        <Text style={{fontSize:15,color:'#444', textTransform:'uppercase'}}>Поставить оценку приложению</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ height:40,justifyContent:'center', paddingStart:10 }}>
                                        <Text style={{fontSize:15,color:'#444', textTransform:'uppercase'}}>Рассказать мне</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={[styles.closeMenu,{
                            transform: [{scale: scaleBack},{ translateX: 500}],
                            zIndex:-1,
                        }] } onPress={()=>{setScaleBack(0)}}>
                        </TouchableOpacity>
                    </Animated.View>
                </>

    );
});
export default  Index;

