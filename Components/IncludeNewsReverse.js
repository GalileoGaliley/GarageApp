import React from 'react';
import {Dimensions, Image, Text, View} from "react-native";
import {styles} from "../Styles";

const IncludeNewsReverse = ({mt}) => {
    return (
        <View style={{width:'100%',marginTop:mt, height:Dimensions.get('window').width / 1.5, flex:1, flexDirection:'row', borderTopWidth:1, borderBottomWidth:1, borderColor:'#9a9a9a'}}>
            <View style={{width:'50%', backgroundColor:'#fff'}}>
                <Text style={{fontSize:35, textAlign:'center',  color:'#6c6c6c'}}>Lorem ipsum dolor sit amet</Text>
                <Text style={{fontSize:20, textAlign:'center',  color:'#6c6c6c', marginTop:'auto', marginBottom:'auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Text>
            </View>
            <View style={{width:'50%'}}>
                <Image style={styles.imagesInMenu} source={require('../Static_Images/112.jpeg')}/>
            </View>
        </View>
    );
};

export default IncludeNewsReverse;