import React from 'react';
import {styles} from "../Styles";
import {Text, TouchableOpacity, View} from "react-native";


const MenuItem = (props) => {
    return (
        <TouchableOpacity onPress={props.call} style={styles.menuItem}>
            <View style={styles.menuItemIcon}>
                {props.icon}
            </View>
            <View style={styles.menuItemText}>
                <Text style={{fontSize:17,textAlign:'center', fontWeight:'bold'}}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default MenuItem;