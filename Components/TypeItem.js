import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../Styles";

const TypeItem = ({type, navigation}) => {
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    return (
        <TouchableOpacity style={{borderWidth:0.5, borderColor:'#3e7930',backgroundColor:'#dedede', width:'80%', height:100, justifyContent:'center', marginTop:40, marginBottom:40 }} onPress={()=>{navigation.push('WareList', {id:type.id})}}>
            {/*<Image style={{height:'100%', position:'absolute', width:'35%', right:0}} source={{uri: type.img}} />*/}

            <Text style={{color:'#545454',fontSize:20, fontWeight:'bold', textAlign:'left', marginLeft:30}}>{type.name}</Text>
            <View style={{backgroundColor: getRandomColor(), width:'20%', height:'100%', position:'absolute', right:0 }}>

            </View>
        </TouchableOpacity>
    );
};

export default TypeItem;