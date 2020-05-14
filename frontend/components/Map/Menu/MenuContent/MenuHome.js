import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';

//component
import HostList from './HostList/HostList';
import GuestList from './GuestList/GuestList';

class MenuHome extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <ScrollView style = {styles.noticeView}>
                <Text style = {styles.notice}>Find a location</Text>
                <HostList
                    openEventModal = {this.props.openEventModal}
                    searchLocation = {this.props.searchLocation}/>
                <GuestList
                    openEventModal = {this.props.openEventModal}
                    searchLocation = {this.props.searchLocation}/>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    noticeView: {
        flex: 1,
    },
    notice: {
        fontSize: 30,
        textAlign: "center",
        padding: 10,
        fontWeight: "200",
        fontFamily: 'Helvetica Neue',
    },
});

export default MenuHome;