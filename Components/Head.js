import React, {useContext, useState} from 'react';
import {Header, Icon} from 'react-native-elements';
import {getBackgroundColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import Index from "../Index";
import {observer} from "mobx-react-lite";
import {Context} from "../App";

const Head = observer((props) => {
    const {user} = useContext(Context)
    return (
        <>
            <View style={{width:'100%', height:70,backgroundColor:'#fff', flexDirection:'row'}}>
                <TouchableOpacity style={{width:'15%',height:'100%',justifyContent:'center',alignItems:'center'}} onPress={()=>{if(user.visible < 0){user.setVisible(0)}else if(user.visible == 0){user.setVisible(-Dimensions.get('window').width / 100 * 80)} }}>
                    <Icon name={'menu'} color={'#505050'} />
                </TouchableOpacity>

                <View style={{width:'70%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#505050', fontSize:30, fontWeight:"bold"}}>GarageOfTheDay</Text>
                </View>
            </View>
        </>

    );
});

export {
    Head
};
