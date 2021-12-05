import React, {useEffect, useState} from 'react';
import {Dimensions, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Holder from "./Holder";
import {CrossDelete} from "../Static_Images/IconRNS";
import BasketItem from "./BasketItem";
import {observer} from "mobx-react-lite";
import storage from "../storage";

const BasketList = observer(() => {
    const [waresInBskt, setWaresInBskt] = useState([]);
    useEffect(()=>{
        try{
            storage.getAllDataForKey('waresInLocalStorage').then(ret=>{
                setWaresInBskt(ret);
                console.log(waresInBskt)
            }).catch((e)=>{console.log(e)})
        }catch(e){
            console.log(e)
        }

    },[waresInBskt])
    return (
        <View style={{backgroundColor:'rgba(232,232,232,0.87)', height:Dimensions.get('window').height}}>
            <View>
                <Holder h={10}/>
                <Text style={{fontSize:30, textAlign:'center', color:'#555'}}>
                    {waresInBskt.length?'Ваши товары!':'Тут пока пусто!'}

                </Text>
            </View>

            <ScrollView>
                {waresInBskt.map((item, index)=>{
                    return <BasketItem ware={item} key={item.id}  index={index} />
                })}

                <Holder h={30}/>
            </ScrollView>
            <View style={{width:'100%', padding:10}}>
                <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:20,color:'#555', fontWeight:'bold'}}>ВСЕГО:</Text>
                    <Text style={{fontSize:20,color:'#555', fontWeight:'bold'}}>5099 РУБ</Text>
                </View>
                <View style={{alignItems:'center', marginTop:20, width:'100%'}}>
                    {waresInBskt.length?<TouchableOpacity style={{backgroundColor:'#77b662', borderRadius:10}}><Text style={{fontSize:25,color:'#fff', fontWeight:'bold', margin:10}}>Оформить покупку!</Text></TouchableOpacity>
                    :
                    <Holder h={10}/>}
                     </View>
            </View>
            <Holder h={50}/>

        </View>
    );
});

export default BasketList;