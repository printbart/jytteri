import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class EventTitle extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <View style = {styles.eventTitleView}>
                <View style = {styles.eventHeaderView}>
                    <Text style = {styles.eventInfoText}>Title</Text>
                </View>
                <View style = {styles.eventTitle}>
                    <Text style ={styles.eventTitleText}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    eventTitleView: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: "#F9A908",
        opacity: 0.7,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    eventHeaderView: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    eventTitle: {
        flexDirection: 'row',
        flex: 5,
        alignItems: 'center',
    },
    eventInfoText: {
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
    },
    eventTitleText: {
        flex: 1,
        fontFamily: 'Helvetica Neue',
        color: "white",
        fontWeight: "500",
        fontSize: 15,
    },
});

export default EventTitle;