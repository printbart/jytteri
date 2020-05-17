import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';

//packages
import AsyncStorage from '@react-native-community/async-storage';

//icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//logo
import JytteriLogo from '../../../../../Images/JytteriLogo.png';

class GuestList extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        this.getUserGuestEvents();
    }

    //when event is pressed
    async onPressEvent(item){
        await this.props.searchLocation(item)
        await this.props.openEventModal(item);
    }

    //get user host event
    getUserGuestEvents = async() => {
        let info = {
            userID: await AsyncStorage.getItem('userID'), //userID
        };

        let request = new Request('http://localhost:5000/api/getUserGuestEvents', {
            method: 'POST',
            headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
            body: JSON.stringify(info)
        });
        fetch(request).then((response) => {
        response.json().then((data) => {
            if(data[0].latitude){ //if data exist
                this.setState({guestEventList: data});
            }
        });
        }).catch(function(err){
        
        });
    }

    renderEvents = ({item}) => {
        return(
            <TouchableOpacity style = {styles.eventView} onPress = {this.onPressEvent.bind(this, item)}>
                <View style = {styles.conditionView}>
                    <Image
                        source = {JytteriLogo}
                        style = {[styles.logo, (item.startDate - new Date())>0 && {opacity: 0.3}]}/>
                </View>
                <View style = {styles.eventTitleView}>
                    <View style = {styles.eventName}>
                        <Text style = {styles.eventTitleText}>{item.eventName}</Text>
                    </View>
                    <View style = {styles.eventAddress}>
                        <Text style = {styles.eventAddressText}>{item.locationAddress}</Text>
                    </View>
                </View>
                <View style = {styles.eventPopulationView}>
                    <View style = {styles.eventPopulationIconView}>
                        <FontAwesome name="user-o" size={20} color="black"/>
                    </View>
                    <View style = {styles.eventPopulationCountView}>
                        <Text style = {styles.eventPopulationCountText}>{item.guestCount ? item.guestCount : 0}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <View style = {styles.templateView}>
                <Text style = {styles.title}>Guest</Text>
                {this.state.guestEventList && this.state.guestEventList.length != 0 ?
                <SafeAreaView>
                    <FlatList
                        data = {this.state.guestEventList}
                        renderItem = {this.renderEvents}
                        keyExtractor = {(item)=>item.eventID.toString()}/>
                </SafeAreaView>:
                <View style = {styles.emptyNotificationView}>
                    <Text style ={styles.emptyNotificationText}>No Guest at the moment</Text>
                </View>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    hostView:{
    },
    title: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "500",
        fontFamily: 'Helvetica Neue',
    },
    eventView:{
        margin: 5,
        padding: 5,
        flexDirection: "row",
    },
    conditionView:{
        width: 35,
        justifyContent: "center",
    },
    logo: {
        resizeMode:'contain',
        width: 25,
        height: 25,
    },
    eventTitleView:{
        flex: 1,
    },
    eventTitleText:{
        fontSize: 20,
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    },
    eventAddressText:{
        fontSize: 10,
        fontWeight: "300",
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    },
    eventPopulationView:{
        width: 50,
        flexDirection: "row",
        alignItems: 'center',
    },
    eventPopulationIconView:{
        flex: 1,
        alignItems: 'flex-end',
        padding: 5,
    },
    eventPopulationCountView:{
        flex: 1,
    },
    eventPopulationCountText:{
        fontSize: 20,
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    },
    emptyNotificationView:{
        padding: 10,
        alignItems: "center",
    },
    emptyNotificationText:{
        fontSize: 20,
        fontWeight: "300",
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    }
});

export default GuestList;