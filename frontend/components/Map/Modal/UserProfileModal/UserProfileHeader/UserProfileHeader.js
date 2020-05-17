import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//component
import CloseModal from '../../ModalComponents/CloseModalButton/CloseModalButton';

class UserProfileHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <View style = {styles.eventModalHeaderView}>
                <CloseModal
                closeModal = {this.props.closeModal}/>
                <View style = {styles.eventTitleView}>
                    <Text style = {styles.eventTitleText}>{this.props.userData[0].username}</Text>
                </View>
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

export default UserProfileHeader;