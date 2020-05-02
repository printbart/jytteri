import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

class OpenModalButton extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    onClickOpenSearchModal = () =>{
        this.props.openSearchModal();
    }

    render(){
        return(
            <TouchableOpacity style = {styles.bottomHeaderView} onPress={this.onClickOpenSearchModal}>
                <Text style = {styles.bottomHeaderText}>Where?</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    bottomHeaderView: {
        height: 50,
        borderRadius: 50,
        backgroundColor: "#f5f5f5",
        justifyContent: 'center',
    },
    bottomHeaderText:{
        paddingLeft: 20,
        fontSize: 20,
        color: "#3C3C3D",
        fontFamily: 'Helvetica Neue',
    },
});

export default OpenModalButton;