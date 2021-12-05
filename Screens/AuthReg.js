import React, {useContext, useState} from 'react';
import {Button, ScrollView, Text, TextInput, View} from "react-native";
import {styles} from "../Styles";
import storage from "../storage";
import {registration, login} from "../https/UserAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../App";

export const AuthReg = observer(({navigation}) => {
    const {user} = useContext(Context);
    const [variant, setVariant] = useState(true);
    //Auth
    const [loginOrEmail, setLoginOrEmail] = useState('');
    const [password, setPassword] = useState('');
    //Reg
    const [passwordNew, setPasswordNew] = useState('');
    const [passwordDuplicate, setPasswordDuplicate] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [include, setInclude] = useState('');

    const signUp = async ()=>{
        try {
            if (passwordNew !== passwordDuplicate){
                setInclude('Введенные пароли не совпадают');
                return
            }
            if (login.length < 8 || passwordNew.length < 8) {
                setInclude('Логин и пароль должны быть не короче восьми символов');
                return
            }
             await registration(login,email,passwordNew).then((data)=>{
                console.log(data)
                user.setUser(user);
                user.setIsAuth(true);
                navigation.navigate('Home')
            });

        }catch (e){
            console.log('попытка-1')
            console.log(e)
            if (e.response.data.message.message == true) {

                setInclude(e.response.data.message.message);
                return
            }else if (e.response.data.message == true) {
                setInclude(e.response.data.message)
                return
            }else {
                setInclude('Ошибка')
                return
            }
            //Возможны проблемы с выводом сообщения, ничего страшного просто убери .message
        }
    };
    const signIn = async ()=>{
        try {
            if(loginOrEmail && password){
                await login(loginOrEmail, password).then(()=>{

                })
            }
        }catch (e){
            console.log(e)
        }
    }
    const setStorage = ()=>{

        storage.save({
            key: 'loginState',
            data: {
                from: 'some other site',
                userid: 'some userid',
                token: 'some token'
            },
            expires: 1000 * 3600
        });
    }
    const loadStorage = ()=>{
        storage.load({
                key: 'loginState',
                autoSync: true,
                syncInBackground: true,
                syncParams: {
                    extraFetchOptions: {
                    },
                    someFlag: true
                }
            })
            .then(ret => {
                console.log(ret.userid);
            });
    };

    switch (variant){
        case true:
            return (
            <ScrollView>
                <View style={styles.authRegContainer}>
                    <View style={{borderColor:'#444', width: '100%',height:'50%',marginTop:40, alignItems: 'center',top:0, borderRadius:10}}>
                        <Text style = {{fontSize:36}}>Авторизация!</Text>
                        <View style={{width:'100%', flex:1, justifyContent: "center", alignItems:"center"}}>
                            <TextInput
                                onChangeText={setLoginOrEmail}
                                value={loginOrEmail}
                                placeholder="Введите логин или e-mail!"
                                style={styles.input}
                            />
                            <TextInput
                                onChangeText={setPassword}
                                value={password}
                                placeholder="Введите пароль!"
                                style={[styles.input,{marginTop:30}]}
                            />
                        </View>
                        <Button title={'Войти!'} color = {'#77b662'} onPress={()=>{signIn()}} />
                    </View>
                    <View style={{marginTop:60}}>
                        <Text style={{fontSize:20, marginBottom:30}}>
                            Ещё нет аккаунта? Зарегистрируйся!
                        </Text>
                        <Button title={'Зарегистрироваться!'} onPress={()=>{setVariant(false)}} color={'#6299b6'} />
                    </View>

                </View>
            </ScrollView>
        );
            break;
        case false:
            return (
            <ScrollView>
                <View style={styles.authRegContainer}>
                    <View style={{borderColor:'#444', width: '100%',height:'50%',marginTop:40, alignItems: 'center',top:0, borderRadius:10}}>
                        <Text style = {{fontSize:36}}>Регистрация!</Text>
                        <View style={{width:'100%', flex:1, justifyContent: "center", alignItems:"center"}}>
                            <TextInput
                                onChangeText={setLogin}
                                value={login}
                                placeholder="Придумайте логин!"
                                style={styles.input}
                            />
                            <TextInput
                                onChangeText={setEmail}
                                value={email}
                                placeholder="Введите e-mail!"
                                style={[styles.input,{marginTop:30}]}
                            />
                            <TextInput
                                onChangeText={setPasswordNew}
                                value={passwordNew}
                                placeholder="Придумайте пароль!"
                                style={[styles.input,{marginTop:30}]}
                            />
                            <TextInput
                                onChangeText={setPasswordDuplicate}
                                value={passwordDuplicate}
                                placeholder="Повторите пароль!"
                                style={[styles.input,{marginTop:30}]}
                            />
                        </View>
                        <Button title={'Регистрация!'} color={'#6299b6'} onPress={()=>{signUp()}} />

                    </View>
                    <View style={{marginTop:60}}>
                        <Text style={{fontSize:20, marginBottom:30}}>
                            Есть аккаунт? Авторизуйся!
                        </Text>
                        <Button title={'Авторизоваться!'} onPress={()=>{setVariant(true)}} color={'#77b662'} />
                    </View>

                </View>
            </ScrollView>
            );
    }

});
