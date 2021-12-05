import React, {useContext, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Button} from "react-native-elements/dist/buttons/Button";
import {Picker} from "react-native-woodpicker";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import {addToCart} from "../https/WareAPI";
import storage from "../storage";
import {Context} from "../App";

const WareScreen = observer(({navigation, route}) => {
    const {user} = useContext(Context);
    const [counts, setCounts] = useState(1);
    const {id} = route.params;

    const ware = route.params.ware;
    const dataSizeTop = [
        { label: "XS", value: 'XS' },
        { label: "S", value: 'S' },
        { label: "M", value: 'M' },
        { label: "L", value: 'L' },
        { label: "XL", value: 'XL' },
        { label: "XXL", value: 'XXL' },
        { label: "XXXL", value: 'XXXL'},
    ];
    const dataSizeBottom = [
        { label: "XS", value: 'XS' },
        { label: "S", value: 'S' },
        { label: "M", value: 'M' },
        { label: "L", value: 'L' },
        { label: "XL", value: 'XL' },
        { label: "XXL", value: 'XXL' },
        { label: "XXXL", value: 'XXXL'},
    ];
    const dataSizeHeight = [
        {label:'155-159',value:'155-159'},
        {label:'160-164',value:'160-164'},
        {label:'165-169',value:'165-169'},
        {label:'170-174',value:'170-174'},
        {label:'175-179',value:'175-179'},
        {label:'180-184',value:'180-184'},
        {label:'185-190',value:'185-190'},
    ];

    const [sizeTop, setSizeTop] = useState(dataSizeTop[0]);
    const [sizeBottom, setSizeBottom] = useState(dataSizeBottom[0]);
    const [sizeHeight, setSizeHeight] = useState(dataSizeHeight[0]);

    let size = {
        sizeTop: sizeTop,
        sizeBottom: sizeBottom,
        height: sizeHeight,
    };

    const addToCartbtn = ()=>{
        //
        // if (false) {
        //     let userName = jwt_decode(token);
        //
        //     addToCart(id, counts, userName.id.id, size);
        // }else{

            let wares = ware;
            wares.counts = counts;
            wares.size = size;

            storage.getAllDataForKey('waresInLocalStorage').then(ret => {
                console.log(ret)
                if (ret.length > 0){
                    storage.save({
                        key: 'waresInLocalStorage',
                        id: ret.length,
                        data: wares,
                        expires: 1000 * 3600
                    })
                }else{
                    storage.save({
                        key: 'waresInLocalStorage',
                        id: 0,
                        data: wares,
                        expires: 1000 * 3600
                    })
                }
            });

        }

    // }

    return (
            <ScrollView style={{width:'100%', height:'100%', marginTop:0}}>
                <View style = {{width:'100%',height:600, flex:1, alignItems:'center'}}>
                    <Image style={{width:'90%',height:'100%', marginTop:30}} source={{uri:'https://neutrino-study.site:5000/' + route.params.ware.img}}/>
                </View>
                <View style={{width:'90%',margin:'5%', marginTop:50, flex:1, justifyContent:'flex-start'}}>
                    <Text style={{ color:'#4f4e4e',fontSize:20}}>
                        {route.params.ware.name}
                    </Text>
                    <Text style={{fontWeight:'bold',marginTop:10, marginBottom:40, fontSize:25, color:'#4f4e4e'}}>
                        {route.params.ware.price} P
                    </Text>

                    <View style={{marginBottom:25}}>
                        <Text style={{ textAlign:'center', fontSize:27, color:'#4f4e4e',}}>
                            Выберите размеры:
                        </Text>
                    </View>
                    <View style={{width:'100%', flex:1, height: '100%', alignItems:'flex-start', justifyContent:'space-evenly', flexDirection:'row', marginBottom:30}}>
                        <View>
                            <Text style={{textAlign:"center", color:'#4f4e4e', fontSize:15, fontWeight:'800',}}>Размер верха</Text>
                            <Picker
                                item={sizeTop}
                                items={dataSizeTop}
                                onItemChange={setSizeTop}
                                title="Размер верха"
                                placeholder="Select Data"
                                isNullable={false}
                                textInputStyle={{color:'#49733f', textAlign:"center", fontWeight:'bold', fontSize:20}}
                                style={{borderWidth:1, borderColor:'#b9b9b9', width:100, height:50}}
                                //mode="dropdown"
                                //isNullable
                                //disable
                            />
                        </View>
                        <View>
                            <Text style={{textAlign:"center", color:'#4f4e4e', fontSize:15, fontWeight:'800',}}>Размер низа</Text>
                            <Picker
                                item={sizeBottom}
                                items={dataSizeTop}
                                onItemChange={setSizeBottom}
                                title="Размер низа"
                                placeholder="Select Data"
                                isNullable={false}
                                textInputStyle={{color:'#49733f', textAlign:"center", fontWeight:'bold', fontSize:20}}
                                style={{borderWidth:1, borderColor:'#b9b9b9', width:100, height:50}}
                                //mode="dropdown"
                                //isNullable
                                //disable
                            />
                        </View>

                        <View>
                            <Text style={{textAlign:"center", color:'#4f4e4e', fontSize:15, fontWeight:'800',}}>Рост</Text>
                            <Picker
                                item={sizeHeight}
                                items={dataSizeHeight}
                                onItemChange={setSizeHeight}
                                title="Рост"
                                placeholder="Select Data"
                                isNullable={false}
                                textInputStyle={{color:'#49733f', textAlign:"center", fontWeight:'bold', fontSize:20}}
                                style={{borderWidth:1, borderColor:'#b9b9b9', width:100, height:50}}
                                //mode="dropdown"
                                //isNullable
                                //disable
                            />
                        </View>
                    </View>

                    <View style={{width:'100%', alignItems:'center'}}>
                        <View style={{borderWidth:0.5, borderColor:'#77b662', flex:1, flexDirection:'row'}}>
                            <TouchableOpacity onPress={()=>{if(counts >= 1){setCounts(counts-1)}}} style={{width:45, height:45, justifyContent:'flex-start'}}>
                                <Text style={{fontSize:40, textAlign:'center', height:'100%',lineHeight:45, textAlignVertical:'center', color:'#606060'}}>
                                    -
                                </Text>
                            </TouchableOpacity>
                            <View style={{width:45, height:45, justifyContent:'flex-start'}}>
                                <Text style={{fontSize:30, textAlign:'center', height:'100%',lineHeight:40, textAlignVertical:'center', color:'#606060'}}>
                                    {counts}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={()=>{setCounts(counts-1+2)}} style={{width:45, height:45, justifyContent:'flex-start'}}>
                                <Text style={{fontSize:40, textAlign:'center',height:'100%',lineHeight:45, textAlignVertical:'center', color:'#606060'}}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:'50%', justifyContent:'center', marginTop:30, marginBottom:30}}>
                            <Button onPress={()=>{
                                addToCartbtn()
                            }}  buttonStyle={{backgroundColor:'#77b662',}} title={'Добавить в корзину!'} />
                        </View>
                    </View>
                    <View style={{width:'100%', marginTop:10,}}>
                        <Text style={{color:'#4f4e4e', fontSize:27,textAlign:'center', marginBottom:20}}>
                            Описание
                        </Text>
                        <View style={{width:'100%', borderWidth:1, borderColor:'#b9b9b9', backgroundColor:'#f8f8f8'}}>
                            <Text style={{margin:'3%',fontSize:20, color:'#4f4e4e'}}>
                                {route.params.ware.discription}
                            </Text>
                        </View>
                    </View>



                </View>
            </ScrollView>
    );
});

export default WareScreen;
