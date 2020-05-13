import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
            <View style = {styles.noticeView}>
                <HostList />
                <GuestList />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    noticeView: {
        flex: 1,
    },
    noticeText: {
        fontSize: 30,
        fontWeight: "200",
        fontFamily: 'Helvetica Neue',
    },
});

export default MenuHome;