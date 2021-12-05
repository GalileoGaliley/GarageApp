import React, {useState} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../Styles";
import RadioGroup, {RadioButton} from 'react-native-radio-buttons-group';

const BasketForm = () => {



    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [name, setName] = useState();
    const [pastname, setPastname] = useState();
    const [patronymic, setPatronymic] = useState();
    const [region,setRegion] = useState('');
    const [city, setCity] = useState();
    const [street, setStreet] = useState();
    const [home, setHome] = useState();
    const [comment, setComment] = useState();
    const [include, setInclude] = useState();
    const [casts, setCasts] = useState();
    const [deliver, setDeliver] = useState('');
    const [deliverPrice, setDeliverPrice] = useState(0);
    const [check, setCheck] = useState(true);
    const [index, setIndex] = useState();
    return (
        <ScrollView >
            <Text style={{fontSize:30, color:'#476750', textAlign:'center', marginTop:20}}>Заполните форму!</Text>
            <View style={{flex:1, justifyContent:"center", width:'100%', alignItems:'center'}}>
                <TextInput
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Введите e-mail!"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={setPhone}
                    value={phone}
                    placeholder="Введите номер своего телефона!"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={setName}
                    value={name}
                    placeholder="Введите имя!"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={setPastname}
                    value={pastname}
                    placeholder="Введите свою фамилию!"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={setPatronymic}
                    value={patronymic}
                    placeholder="Введите своё отчество!"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={setIndex}
                    value={index}
                    placeholder="Введите индекс почты для доставки!"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={setRegion}
                    value={region}
                    placeholder="Введите регион для доставки!"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={setCity}
                    value={city}
                    placeholder="Введите город для доставки!"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={setStreet}
                    value={street}
                    placeholder="Введите улицу для доставки!"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={setHome}
                    value={home}
                    placeholder="Введите номер дома!"
                    style={styles.input}
                />
            </View>
            <View style={{flex:1, justifyContent:"center", width:'100%', alignItems:'center', marginTop:30}}>
                <Text style={{fontSize:15, color:'#e8ab00', textAlign:'center', marginTop:20}}>Выберите способ доставки!</Text>
                <View style={{ flex:1, marginTop:20}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
                        <RadioButton onPress={()=>{setDeliver('Rus'); setCheck(!check)}} selected={check} color={'#7a7676'} id={3} label={'Почта поссии'}/>
                        <Text>???</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
                        <RadioButton onPress={()=>{setDeliver('CDEK'); setCheck(!check)}} selected={!check} color={'#7a7676'} id={3} label={'CDEK'}/>
                        <Text>???</Text>
                    </View>

                </View>
                <TouchableOpacity style={{backgroundColor:'#77b662', width:'80%', height:50, marginTop:30, marginBottom:50, flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'#ffffff',fontSize:30, textTransform:'uppercase', fontWeight:'bold'}}>Оплатить!</Text>

                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default BasketForm;