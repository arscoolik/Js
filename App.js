import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TextInput} from 'react-native';
import Main from './components/main'
import Survey from './components/survey'
import Start from './components/start'
import Reg from './components/reg'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {gstyles} from "./styles";

const fonts = () => Font.loadAsync({
  'robo_it': require('./fonts/Robo_It.ttf'),
  'robo': require('./fonts/Robo.ttf'),
});

function StartScreen({navigation}) {
  return (
      <Start nav={navigation}/>
  );
}

function RegScreen({navigation}) {
  return (
      <Reg nav={navigation}/>
  );
}
function MainScreen({navigation}) {
  return (
      <Main/>
  );
}
function SurveyScreen({navigation}) {
  return (
      <Survey nav={navigation}/>
  );
}


const Stack = createNativeStackNavigator();


export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Start" component={StartScreen} options={{  headerStyle: {
                backgroundColor: '#B3E2E6', borderBottomWidth: 0,
              } }}/>
            <Stack.Screen name="Registration" component={RegScreen} options={{ headerStyle: {
                backgroundColor: '#B3E2E6',borderBottomWidth: 0,
              } }}/>
            <Stack.Screen name="Survey" component={SurveyScreen} options={{headerStyle: {
                backgroundColor: '#B3E2E6', borderBottomWidth: 0,
              } }}/>
            <Stack.Screen name="Main" component={MainScreen} options={{headerBackVisible:false, headerStyle: {
                backgroundColor: '#B3E2E6', borderBottomWidth: 0,
              } }}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
  else{
    return(
      <AppLoading startAsync={fonts}
                  onFinish={()=>setFont(true)}
                  onError={console.warn}/>
    );
  }
}

