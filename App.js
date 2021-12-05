
import React, {createContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import WareStore from './store/WareStore.js';
import UserStore from "./store/UserStore";
import Index from "./Index";
import {StatusBar} from "expo-status-bar";
import {Head} from "./Components/Head";
import {HomeScreen} from "./Screens/HomeScreen";
import {ArrowLeft} from "./Static_Images/IconRNS";
import {ProfileScreen} from "./Screens/ProfileScreen";
import {Cart} from "./Screens/Cart";
import WareScreen from "./Screens/WareScreen";
import {AuthReg} from "./Screens/AuthReg";
import {View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import WareList from "./Components/WareList";
import AboutUs from "./Screens/AboutUs";
import Test from "./Screens/test";
export const Context = createContext(null);

const Stack = createNativeStackNavigator();

const App = observer(()=> {
    const [show_AND_hide, setShow_AND_hide] = useState(-500);
    return (
        <Context.Provider value={{
            ware: new WareStore(),
            user: new UserStore()
        }}>
            <NavigationContainer>
                <StatusBar hidden={true}/>
                <View style={{height:'100%', width:'100%', position:'relative'}}>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen} options={{header: ()=><Head />}}/>
                        {/*<Stack.Screen name="Home" options={{header: ()=><Head callBack={()=>{showMenu();setTouchCloseMenu(1)}} />}}  component={HomeScreen} height={'100%'}/>*/}
                        <Stack.Screen options={{headerTitle: 'Профиль!'}} name="Profile" component={ProfileScreen} />
                        <Stack.Screen options={{headerTitle:'Корзина!'}} name="Cart" component={Cart} />
                        <Stack.Screen  name="WareScreen" component={WareScreen} />
                        <Stack.Screen options={{headerTitle:'Товары!'}} name="WareList" component={WareList} />

                        <Stack.Screen options={{headerTitle:'Назад!'}} name="Auth" component={AuthReg} />
                        <Stack.Screen options={{headerTitle:'О нас!'}} name="AboutUs" component={AboutUs} />
                    </Stack.Navigator>
                </View>

            </NavigationContainer>
        </Context.Provider>
    );
});
export default  App;




