import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

//packages
import AsyncStorage from '@react-native-community/async-storage';

class GuestList extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        this.getUserGuestEvents();
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
            this.setState({guestEventList: data});
        });
        }).catch(function(err){
        
        });
    }

    renderEvents = ({item}) => {
        return(
            <View style = {styles.event}>
                <Text>{item.eventName}</Text>
            </View>
        )
    }

    render(){
        return(
            <View style = {styles.templateView}>
                <Text style = {styles.title}>Guest</Text>
                <FlatList
                    data = {this.state.guestEventList}
                    renderItem = {this.renderEvents}
                    keyExtractor = {(item)=>item.eventID.toString()}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    templateView:{
    },
});

export default GuestList;