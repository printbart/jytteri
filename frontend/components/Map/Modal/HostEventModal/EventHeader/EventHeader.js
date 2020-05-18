import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//components
import CloseModalButton from '../../ModalComponents/CloseModalButton/CloseModalButton';

class EventHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <View style = {styles.eventModalHeaderView}>
                <View style = {{flex: 1,}}>
                    <CloseModalButton 
                        closeModal={this.props.closeEventModal}/>
                </View>
                <View style = {styles.eventTitleView}>
                    <Text style = {styles.eventTitleText}>Host Event</Text>
                </View>
                <TouchableOpacity style = {styles.eventSaveView} onPress = {this.props.saveEvent}>
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
        fontSize: 15,
        fontWeight: "500",
        color: "white",
    }
});

export default EventHeader;