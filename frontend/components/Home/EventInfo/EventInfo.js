import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

//images
import defaultProfilePicture from '../../../Images/defaultProfilePicture.png';

class EventInfo extends Component {
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
                    <View style = {styles.address}>
                        <Text>1234 Address Address Address Address</Text>
                    </View>
                </View>
                <View style = {styles.guestInfoView}>
                    <View style = {styles.headerView}>
                        <Text style = {styles.headerText}>Guest</Text>
                    </View>
                    <View style = {styles.address}>
                        <Text>1234 Address Address Address Address</Text>
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
        alignItems: 'center',
        padding: 10,
    },
    guestInfoView: {
        alignItems: 'center',
        padding: 10,
    },
    headerView: {
        alignItems: 'center',
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Helvetica Neue',
    }
});

export default EventInfo;