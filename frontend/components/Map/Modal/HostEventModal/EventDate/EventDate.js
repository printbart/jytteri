import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//packages
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//function
import { monthToString } from '../DateFunctions/monthToString'
import { minuteToString } from '../DateFunctions/minuteToString';

class EventDate extends Component {
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
                            <Text style = {styles.dateText}>{monthToString(this.props.chosenDate.getMonth())}</Text>
                        </View>
                        <View style = {styles.date}>
                            <Text style = {styles.dateText}>{this.props.chosenDate.getDate()}</Text>
                        </View>
                    </View>
                    <View style = {styles.timeView}>
                        <View style = {styles.date}>
                            <Text style = {styles.dateText}>
                                {this.props.chosenDate.getHours>=12 ? (this.props.chosenDate.getHours())%12 : this.props.chosenDate.getHours() }
                            </Text>
                        </View>
                        <View style = {styles.colon}>
                            <Text style = {styles.dateText}>:</Text>
                        </View>
                        <View style = {styles.minute}>
                            <Text style = {styles.dateText}>{minuteToString(this.props.chosenDate.getMinutes())}</Text>
                        </View>
                        <View>
                            <Text style = {styles.dateText}>{this.props.chosenDate.getHours()<12 ? "AM" : "PM"}</Text>
                        </View>
                    </View>
                    <View style = {styles.downIconView}>
                        <MaterialCommunityIcons name = "menu-down" size = {35} color = "lightgrey"/>
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
        borderWidth: 0.5,
        borderColor: "#808080",
        margin: 10,
        borderRadius: 5,
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

export default EventDate;