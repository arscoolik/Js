import React from 'react';
import {View, Text} from 'react-native'
import {gstyles} from '../styles';
import {TouchableOpacity} from "react-native";

const Task = (props) => {

    return (
        <View style={gstyles.item}>
            <View style={gstyles.itemLeft}>
                <View style={gstyles.square}></View>
                <Text style={gstyles.itemText}>{props.text}</Text>
            </View>
            <View style={gstyles.circular}></View>
        </View>

    )
}

export default Task;