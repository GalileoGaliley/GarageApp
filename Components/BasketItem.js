import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import storage from "../storage";

const BasketItem = ({ware, index}) => {
    console.log('index');
    console.log(index);
    console.log('ware')
    console.log(ware)
    const deleteItem = ()=>{
        storage.remove({
            key: 'waresInLocalStorage',
            id: index
        });
    }
    return (
        <View style={{ backgroundColor:'#fff', height:170, width:Dimensions.get('screen').width - 20, marginLeft:10, padding: 3, paddingStart:0, marginTop: 20}}>
            <Image  style={{maxWidth:'30%', height:'70%'}} source={{uri:'https://neutrino-study.site:5000/' + ware.img}}/>
            <View style={{width:'70%', height:'100%', position:'absolute', right:0,}}>
                <Text style={{fontSize:14, color:'#555'}}>
                    {ware.name}
                </Text>
                <Text style={{fontSize:17, fontWeight:'bold',  color:'#555', marginTop:5}}>
                    {ware.price} руб
                </Text>

                <Text style={{fontSize:14, color:'#555', marginTop:10}}>
                    Верх:{ware.size.sizeTop.label} / Низ:{ware.size.sizeBottom.label} / Рост: {ware.size.height.label} / Кол-во: 1
                </Text>


            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:"center", }}>
                <TouchableOpacity onPress={()=>{deleteItem()}} style={{flexDirection:'row', borderColor:'#d57a83', borderWidth:0.5, borderRadius:2,}}>
                    <Text style={{fontSize:20, margin:5, lineHeight:26}}>
                        УДАЛИТЬ
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default BasketItem;