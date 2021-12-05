import React, {useContext, useEffect} from 'react';
import {fetchTypes} from "../https/WareAPI";
import {Context} from "../App";
import {Dimensions, ScrollView, View} from "react-native";
import {observer} from "mobx-react-lite";
import TypeItem from "./TypeItem";
import img1 from '../Static_Images/5.png';
import img2 from '../Static_Images/1.png';
import img3 from '../Static_Images/2.png';
import img4 from '../Static_Images/3.png';
import img5 from '../Static_Images/4.png';
const TypeList = observer(({navigation}) => {
    const {ware} = useContext(Context);
    useEffect(()=>{
        fetchTypes().then((data)=>{
            ware.setTypes(data);
        })
    },[])
    return (
        <>
            <ScrollView style={{ height: Dimensions.get('screen').height,backgroundColor:'#fff', }}>
                <View style={{flex:1, justifyContent: 'space-evenly', alignItems:'center',height:'100%'}}>
                    {ware.types.map(item=>
                        <TypeItem navigation={navigation} key={item.id} type={item}/>
                    )}
                </View>
            </ScrollView>
        </>
    );
});

export default TypeList;