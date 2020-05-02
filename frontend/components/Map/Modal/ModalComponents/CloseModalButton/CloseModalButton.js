import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class CloseModalButton extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    //close search modal
    onPressCloseModal(){
        this.props.closeModal();
    }

    render(){
        return(
            <TouchableOpacity style = {styles.cancelView} onPress={this.onPressCloseModal.bind(this)}>
                <MaterialIcons name="close" size={25} color="grey"/>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    cancelView:{
        justifyContent: 'center',
    },
});

export default CloseModalButton;