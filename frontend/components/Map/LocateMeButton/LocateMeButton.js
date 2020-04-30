import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

//packages
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class LocateMeButton extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    //zoom to your current location
    centerMyLocation = () => {
        this.props.centerMyLocation();
    }

    render(){
        return(
            <TouchableOpacity style = {styles.locateMeButtonView} onPress = {this.centerMyLocation}>
                <MaterialIcons name="my-location" size={25} color="#3C3C3D"/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    locateMeButtonView:{
        width: 40,
        height: 40,
        position: 'absolute',
        backgroundColor: "#f5f5f5",
        right: 10,
        bottom: '50%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#3C3C3D",
        shadowRadius: 7.5,
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 0,
          height: 2,
        },
    },
});

export default LocateMeButton;