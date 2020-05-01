import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class MenuContent extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    storeLocation = () => {
        this.props.storeLocation();
    }

    render(){
        return(
            <View style = {styles.bottomView}>
                <TouchableOpacity style = {styles.addLocationButtonView} onPress = {this.storeLocation}>
                    <Text style = {styles.addLocationButtonText}>Host Event Here</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bottomView:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    addLocationButtonView:{
        width: "100%",
        alignItems: 'center',
        backgroundColor: "#3C3C3D",
        margin: 5,
        padding: 10,
        borderRadius: 10,
    },
    addLocationButtonText:{
        color: "white",
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
    }
});

export default MenuContent;