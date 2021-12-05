import { Icon } from 'react-native-elements';
import React from 'react';
import {TouchableOpacity, View} from "react-native";
import {styles} from "../Styles";

export default function HomeButton(){
    return(
      <TouchableOpacity onPress={()=>{alert('fuu')}}>
          <Icon
              name='home'
              color='#00aced' />
      </TouchableOpacity>
    );
}