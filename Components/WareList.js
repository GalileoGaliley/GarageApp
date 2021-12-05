import React, {useContext, useEffect, useState} from 'react';
import {Dimensions, ScrollView, View} from "react-native";
import {styles} from "../Styles";
import WareItem from "./WareItem";
import {Context} from "../App";
import {fetchWares} from "../https/WareAPI";
import {observer} from "mobx-react-lite";

const WareList = observer(({navigation,route, id}) => {
    const {ware} = useContext(Context);

    const [countsId, setCountsId] = useState(0);
    let lot = 6;

    useEffect(()=>{
        try {

            fetchWares(route.params.id, null,  countsId).then((data) => {
                ware.setWares(data.rows);

            })
            setCountsId(countsId + lot);
            return
        }catch (e){
            console.log(e)
        }
    },[]);


    const fetch = ()=>{
        try {
            fetchWares(null, null, countsId).then((data) => {
                data.rows.map((item)=>{ware.wares.push(item)});
                setCountsId(countsId + lot);
                return
            })
        }catch (e){
            console.log(e)
        }
    }
    return (
        <View style={[{height:'100%',width:'100%',}]}>
            <ScrollView style={[{width:'100%', height: Dimensions.get('window').height,}]}>
                <View style={[styles.wareList]}>
                    {ware.wares.map(ware =>
                        <WareItem key={ware.id} ware={ware} navigation={navigation}/>
                    )}
                </View>
            </ScrollView>
        </View>
    );
});

export default WareList;