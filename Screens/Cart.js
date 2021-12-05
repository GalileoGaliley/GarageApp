import React from 'react';
import {ScrollView, Text, View} from "react-native";
import {styles} from "../Styles";
import BasketForm from "../Components/BasketForm";
import BasketList from "../Components/BasketList";

export function Cart({navigation}) {
    return (
        <ScrollView style={styles.cartContainer}>
            <BasketList />
        </ScrollView>
    );
}

