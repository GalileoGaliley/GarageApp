import React from 'react';
import {Dimensions, Image, Text, View} from "react-native";

const CommercePhoto = () => {
    return (
        <View style={{width: Dimensions.get('window').width, height:Dimensions.get('window').width * 1.4,flex:1,alignItems:'center',justifyContent:'flex-end', marginTop:30, position:'relative'}}>
            <Image style={{ width:'100%', height:'100%', position:"absolute"}} source={require('../Static_Images/pexels-photo-9783899.jpeg')} />
            <Text style={{color: '#fff', backgroundColor:'#111',  textAlign:'center', fontSize:40,fontWeight:'bold', marginBottom:50}}>С заботой о вас!</Text>
        </View>
    );
};

export default CommercePhoto;