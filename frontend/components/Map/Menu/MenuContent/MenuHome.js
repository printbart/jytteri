import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

//component
import MenuHomeTab from './MenuHomeTab/MenuHomeTab';
import HostList from './HostList/HostList';
import GuestList from './GuestList/GuestList';

class MenuHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            tab: 0 //0: host, 1: guest
        }
    }

    setTab = (input) => {
        this.setState({tab: input});
    }

    render(){
        return(
            <ScrollView style = {styles.noticeView}>
                <Text style = {styles.notice}>Find a location</Text>
                <MenuHomeTab
                    getTab = {this.state.tab}
                    setTab = {this.setTab}/>
                {this.state.tab === 0 ?
                <HostList
                    openEventModal = {this.props.openEventModal}
                    searchLocation = {this.props.searchLocation}/> :
                <GuestList
                    openEventModal = {this.props.openEventModal}
                    searchLocation = {this.props.searchLocation}/> }
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