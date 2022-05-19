import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, TouchableWithoutFeedbackComponent, View, Image, TextInput, Button, Platform} from 'react-native';
import {gstyles} from '../styles';
import {TouchableWithoutFeedback} from "react-native";
import {KeyboardAvoidingView, ScrollView} from "react-native-web";



export default function Reg({ nav }) {
    const [text, setValue] = useState('');

    const OnChange = (text)=>{
        setValue(text);
    };

    return (
        <ScrollView>
            <View style={gstyles.container}>
                {/* <Image style={gstyles.logo} source={require('../assets/logo.png')}/> */}
                <TextInput style={gstyles.input} onChangeText={OnChange} placeholder='Email'/>
                <TextInput style={gstyles.input} onChangeText={OnChange} placeholder='Name'/>
                <TextInput secureTextEntry={true} style={gstyles.input} onChangeText={OnChange} placeholder='Password'/>
                <TextInput secureTextEntry={true} style={gstyles.input} onChangeText={OnChange} placeholder='Confirm Password'/>
                <View style={gstyles.button}>
                    <Button color = "#F2C8A2" onPress={() => nav.navigate('Survey')} title="Зарегистрироваться"/>
                </View>
            </View>
        </ScrollView>
    );
}
