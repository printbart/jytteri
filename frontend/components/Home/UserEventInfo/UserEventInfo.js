import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

class UserEventInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <View style ={styles.eventInfoView}>
                <View style = {styles.hostInfoView}>
                    <View style = {styles.headerView}>
                        <Text style= {styles.headerText}>Host</Text>
                    </View>
                    <View style = {styles.eventAddressView}>
                        <Text style = {styles.eventNameText}>{this.props.userInfo && this.props.userInfo.hostEventName}</Text>
                        <Text style = {styles.eventAddressText}>{this.props.userInfo && this.props.userInfo.hostEventAddress}</Text>
                    </View>
                </View>
                <View style = {styles.guestInfoView}>
                    <View style = {styles.headerView}>
                        <Text style = {styles.headerText}>Guest</Text>
                    </View>
                    <View style = {styles.eventAddressView}>
                        <Text style = {styles.eventNameText}>{this.props.userInfo && this.props.userInfo.guestEventName}</Text>
                        <Text style = {styles.eventAddressText}>{this.props.userInfo && this.props.userInfo.guestEventAddress}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    eventInfoView: {
       flex: 1,
    },
    hostInfoView: {

        padding: 10,
    },
    guestInfoView: {
        padding: 10,
    },
    headerView: {
        alignItems: 'center',
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Helvetica Neue',
    },
    eventAddressView: {

    },
    eventNameText: {
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
    },
    eventAddressText:{
        fontSize: 10,
        color: "rgba(0,0,0,0.8)",
        fontFamily: 'Helvetica Neue',
    }
});

export default UserEventInfo;