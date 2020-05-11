import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


//icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//functions
import { monthToString } from '../../../HostEventModal/DateFunctions/monthToString';
import { minuteToString } from '../../../HostEventModal/DateFunctions/minuteToString';

class EditEventDate extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <View>
                <TouchableOpacity style ={styles.eventDateView} onPress = {this.props.toggleDateKeyboard}>
                    <View style = {styles.eventDateTitleView}>
                        <Text style = {styles.eventDateTitleText}>{this.props.title}</Text>
                    </View>
                    <View style = {styles.dateView}>
                        <View style = {styles.month}>
                            <Text style = {styles.dateText}>
                                {monthToString((new Date(this.props.chosenDate)).getMonth())}
                            </Text>
                        </View>
                        <View style = {styles.date}>
                            <Text style = {styles.dateText}>
                                {((new Date(this.props.chosenDate)).getDate())}
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.timeView}>
                        <View style = {styles.date}>
                            <Text style = {styles.dateText}>
                                {((new Date(this.props.chosenDate)).getHours()) > 12 ? //13+ hours
                                ((new Date(this.props.chosenDate)).getHours()) % 12 :
                                ((new Date(this.props.chosenDate)).getHours()) }
                            </Text>
                        </View>
                        <View style = {styles.colon}>
                            <Text style = {styles.dateText}>:</Text>
                        </View>
                        <View style = {styles.minute}>
                            <Text style = {styles.dateText}>
                                {minuteToString((new Date(this.props.chosenDate)).getMinutes())}
                            </Text>
                        </View>
                        <View>
                            <Text style = {styles.dateText}>
                                {((new Date(this.props.chosenDate)).getHours())<12 ? "AM" : "PM"}
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.downIconView}>
                        <MaterialCommunityIcons name = "menu-down" size = {35} color = "#F9A908"/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    eventDateView: {
        flexDirection: "row",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#F5C669",
        margin: 10,
        borderRadius: 10,
    },
    eventDateTitleView:{
        width: 100,
        textAlign: "center",
    },
    eventDateTitleText:{
        textAlign: "center",
    },
    dateView:{
        flex: 1,
        flexDirection: "row",
        padding: 5,
        justifyContent: "center",
    },
    dateText:{
        padding: 5,
        fontSize: 15,
    },
    timeView:{
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
        padding: 5,
    },
    downIconView:{
        flex: 0.5,
        alignItems: "flex-end",
    }
});

export default EditEventDate;