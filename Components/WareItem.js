import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";


const WareItem = ({ware, navigation}) => {
    return (
        <TouchableOpacity style={{width:'41%', height:300, margin:'3%',marginBottom:100}} onPress={()=>{navigation.push('WareScreen', {ware: ware})}}>
            <View>
                <Image style={{width:'100%',height:'100%'}} source={{uri:'https://neutrino-study.site:5000/' + ware.img}}/>
            </View>
            <View>
                <Text>
                    {ware.price} ₽
                </Text>
                <Text>
                    {ware.name}
                </Text>
            </View>

        </TouchableOpacity>
    );
};

export default WareItem;