import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//package
import DatePicker from 'react-native-date-picker'

class DateKeyboard extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <View style = {styles.dateKeyboardView}>
                <View style = {styles.dateKeyboardHeaderView}>
                    <Text style = {styles.dateKeyboardHeaderText} onPress = {this.props.toggleNextKeyboard}>Enter</Text>
                </View>
                <DatePicker
                    date={new Date(this.props.chosenDate)}
                    onDateChange={this.props.setDate}
                    style={{ width: 415, height: 170 }}
                    timeZoneOffsetInMinutes = {-4*60}
                    />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    dateKeyboardView:{
        flex: 1,
        justifyContent: "flex-end",
    },
    dateKeyboardHeaderView: {
        backgroundColor: "#FFC74F",
        alignItems: "flex-end",
        padding: 5,
        paddingRight: 15,
    },
    dateKeyboardHeaderText:{
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
    }
});

export default DateKeyboard;