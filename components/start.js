//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, TouchableWithoutFeedbackComponent, Image, TextInput, Button} from 'react-native';
import {gstyles} from '../styles';
//import {TouchableWithoutFeedback} from "react-native";
import {TouchableOpacity} from "react-native";



export default function Start({ nav }) {
    const [text, setValue] = useState('');

    const OnChange = (text)=>{
        setValue(text);
    };

    return (
        <View style={gstyles.container}>
            <Image style={gstyles.paint} source={require('../assets/paint.png')}/>
            <Image style={gstyles.paint2} source={require('../assets/paint2.png')}/>
            <Image style={gstyles.logo} source={require('../assets/logo.png')}/>
            <View style={gstyles.container2}>
                <Text style={gstyles.company_name}>TAC-TIC</Text>
                <TextInput style={gstyles.input} onChangeText={OnChange} placeholder='Почта' placeholderTextColor='black'/>
                <TextInput secureTextEntry={true} style={gstyles.input} onChangeText={OnChange} placeholder='Пароль' placeholderTextColor='black'/>
            </View>
            <TouchableOpacity style={gstyles.button}>
                <Text style={gstyles.buttontext} color = "black" onPress={() => nav.navigate('Main')}>Вход</Text>
            </TouchableOpacity>
            <View style={[gstyles.container2, {paddingTop: '0%'}]}>
                <Text style={gstyles.reg} onPress={() => nav.navigate('Registration')}>Регистрация</Text>
            </View>
        </View>
    );
}