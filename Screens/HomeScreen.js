import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    FlatList,
    ScrollView,
    Dimensions,
    StatusBar
} from 'react-native';
import React, {useContext, useEffect, useState} from "react";
import {styles} from "../Styles";


import NavBar from "../Components/HomeButton";
import WareItem from "../Components/WareItem";
import {Context} from "../App";
import {fetchWares} from "../https/WareAPI";
import {observer} from "mobx-react-lite";
import {Head} from "../Components/Head";
import Index from "../Index";
import WareList from "../Components/WareList";
import TypeList from "../Components/TypeList";
import {Tab} from "react-native-elements";
import Main from "../Components/Main";
export  const HomeScreen = observer(({ navigation, route }, props) => {
    const {ware} = useContext(Context);
    let style = {borderBottomWidth:3, borderColor:'#3698f6'};
    const [styleBorderBottom1, setStyleBorderBottom1] = useState(style);
    const [styleBorderBottom2, setStyleBorderBottom2] = useState(null);
    const [styleBorderBottom3, setStyleBorderBottom3] = useState(null);
    const [choise, setChoise] = useState(<Main />);






    return (
        <>
        <View style={styles.selectMenu}>
            <View style={styles.contentSelctMenu}>
                <TouchableOpacity onPress={()=>{setStyleBorderBottom1(style);setChoise(<Main />);setStyleBorderBottom2(null);setStyleBorderBottom3(null);}} style={[styles.selectItem,styleBorderBottom1]}>
                    <Text style={styles.textSelectItem}>Главная</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setStyleBorderBottom1(null);setChoise(<TypeList navigation={navigation} />);setStyleBorderBottom2(style);setStyleBorderBottom3(null);}} style={[styles.selectItem, styleBorderBottom2]}>
                    <Text style={styles.textSelectItem}>Категории</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setStyleBorderBottom1(null);setStyleBorderBottom2(null);setStyleBorderBottom3(style);}} style={[styles.selectItem, styleBorderBottom3]}>
                    <Text style={styles.textSelectItem}>Новинки</Text>
                </TouchableOpacity>

            </View>
        </View>
        {choise}
        <Index navigation={navigation} />

        </>


    );
});
