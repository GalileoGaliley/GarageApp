import React, {useContext, useEffect} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from "react-native";
import {styles} from "../Styles";
import IncludeNews from "./IncludeNews";
import IncludeNewsReverse from "./IncludeNewsReverse";
import Holder from "./Holder";
import CommercePhoto from "./CommercePhoto";
import {observer} from "mobx-react-lite";
import {fetchBanner} from "../https/WareAPI";
import {Context} from "../App";

const Main = observer(() => {
    const {ware} = useContext(Context);
    useEffect(()=>{
        try {

            fetchBanner().then((data) => {
                ware.setBanner(data.rows[data.rows.length - 1]);
            })
            return
        }catch (e){
            console.log(e)
        }
    },[]);
    return (
        <ScrollView style={{backgroundColor:'#ffffff', width:'100%'}}>
            <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>

                <View style={{width:Dimensions.get('window').width, height:Dimensions.get('window').width / 1.1414, marginTop:10}}>
                    <Image style={{width:'100%',height:'100%'}}  source={{uri:'https://neutrino-study.site:5000/' + ware.banner.img}}/>
                </View>

                <IncludeNews mt={25} />
                <IncludeNewsReverse mt = {25} />
                <CommercePhoto />


                <Holder h={50} />
            </View>
        </ScrollView>

    );
});

export default Main;