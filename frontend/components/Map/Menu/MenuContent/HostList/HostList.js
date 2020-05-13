import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

//packages
import AsyncStorage from '@react-native-community/async-storage';

class HostList extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        this.getUserHostEvents();
    }

    //get user host event
    getUserHostEvents = async() => {
        let info = {
            userID: await AsyncStorage.getItem('userID'), //userID
        };
        let request = new Request('http://localhost:5000/api/getUserHostEvents', {
        method: 'POST',
        headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
        body: JSON.stringify(info)
        });
        fetch(request).then((response) => {
        response.json().then((data) => {
            this.setState({hostEventList: data});
        });
        }).catch(function(err){
        console.log(err);
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
            <View style = {styles.hostView}>
                <Text style = {styles.title}>Host</Text>
                <FlatList
                    data = {this.state.hostEventList}
                    renderItem = {this.renderEvents}
                    keyExtractor = {(item)=>item.eventID.toString()}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    hostView:{
    },
});

export default HostList;