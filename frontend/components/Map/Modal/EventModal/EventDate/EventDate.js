import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


//functions
import { monthToString } from '../../HostEventModal/DateFunctions/monthToString';
import { minuteToString } from '../../HostEventModal/DateFunctions/minuteToString';

class EventDate extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <View>
                <View style ={styles.eventDateView}>
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
                            <Text style = {styles.dateText}>{((new Date(this.props.chosenDate)).getDate())}</Text>
                        </View>
                    </View>
                    <View style = {styles.timeView}>
                        <View style = {styles.date}>
                            <Text style = {styles.dateText}>
                                {((new Date(this.props.chosenDate)).getHours())>12 ?
                                ((new Date(this.props.chosenDate)).getHours())%12 :
                                ((new Date(this.props.chosenDate)).getHours()) }
                            </Text>
                        </View>
                        <View style = {styles.colon}>
                            <Text style = {styles.dateText}>:</Text>
                        </View>
                        <View style = {styles.minute}>
                            <Text style = {styles.dateText}>{minuteToString((new Date(this.props.chosenDate)).getMinutes())}</Text>
                        </View>
                        <View>
                            <Text style = {styles.dateText}>{((new Date(this.props.chosenDate)).getHours())<12 ? "AM" : "PM"}</Text>
                        </View>
                    </View>
                </View>
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
        fontWeight: "400",
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
        fontWeight: "400",
    },
    timeView:{
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
        padding: 5,
    },
});

export default EventDate;