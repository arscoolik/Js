import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Keyboard, Platform, Text, TouchableWithoutFeedbackComponent, View} from 'react-native';
import {gstyles} from '../styles';
import {TouchableWithoutFeedback} from "react-native";
import Task from '../components/tasks'
import {KeyboardAvoidingView, TextInput} from "react-native";
import {TouchableOpacity} from "react-native";
import DismissKeyboard from "react-native-web/dist/modules/dismissKeyboard";


export default function Main() {
    const [pos, chPos] = useState(1);
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);


    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task]);
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return (
        <View style={gstyles.container}>

            <View style={gstyles.tasksWrapper}>
                <Text style={gstyles.sectionTitle}> Today's tasks</Text>
                <View style={gstyles.items}>
                    {
                        taskItems.map((item, index) => {
                            return(
                            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                <Task text={item}/>
                            </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>

            <KeyboardAvoidingView behaviour={Platform.OS === "ios" ? "padding" : "height"} style={gstyles.writeTaskWrapper}>
                <TextInput style={gstyles.taskInput} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={gstyles.addWrapper}>
                        <Text style={gstyles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
    );
}
