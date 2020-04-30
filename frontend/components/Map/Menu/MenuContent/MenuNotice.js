import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MenuNotice extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <View style = {styles.noticeView}>
                <Text style = {styles.noticeText}>Find a location</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    noticeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noticeText: {
        fontSize: 30,
        fontWeight: "200",
        fontFamily: 'Helvetica Neue',
    },
});

export default MenuNotice;