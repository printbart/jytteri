import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//packages
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class BackButton extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <TouchableOpacity style = {styles.backButtonView} onPress = {this.props.goBack}>
                <MaterialIcons name="arrow-back" size={20} color="#3C3C3D"/>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    backButtonView:{
        width: 35,
        height: 35,
        position: 'absolute',
        backgroundColor: "white",
        left: 10,
        bottom: '31%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 7.5,
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 2,
          height: 2,
        },
    },
});

export default BackButton;