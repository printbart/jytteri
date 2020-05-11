import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//components
import CloseModalButton from '../../../ModalComponents/CloseModalButton/CloseModalButton';

class EditEventHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <View style = {styles.eventModalHeaderView}>
                <TouchableOpacity style = {styles.eventCancelView} onPress ={this.props.cancelEditEvent}>
                    <Text style = {styles.eventSaveText}>Cancel</Text>
                </TouchableOpacity>
                <View style = {styles.eventTitleView}>
                    <Text style = {styles.eventTitleText}>Edit Event</Text>
                </View>
                <TouchableOpacity style = {styles.eventSaveView} onPress = {this.props.saveEditEvent}>
                    <Text style = {styles.eventSaveText}>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    eventModalHeaderView: {
        padding: 10,
        paddingTop: 50,
        flexDirection: 'row',
        backgroundColor: "#F9A908",
    },
    eventCancelView:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    eventTitleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    eventTitleText: {
        fontSize: 20,
        fontWeight: "500",
        fontFamily: 'Helvetica Neue',
        color: "white",
    },
    eventSaveView: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    eventSaveText: {
        fontSize: 17,
        color: "white",
        fontWeight: "500",
    }
});

export default EditEventHeader;