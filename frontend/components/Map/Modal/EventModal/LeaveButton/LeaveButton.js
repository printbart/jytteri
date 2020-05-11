import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

class LeaveButton extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <TouchableOpacity style = {styles.leaveButtonView} onPress = {this.props.leaveEvent}>
                <Text style = {styles.leaveButtonText}>LEAVE</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    leaveButtonView: {
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#F9A908",
        margin: 20,
        opacity: 0.5
    },
    leaveButtonText: {
        padding: 10,
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
        color: "white",

    }
});

export default LeaveButton;