import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//packages
import AsyncStorage from '@react-native-community/async-storage';

//components
import Header from './Header/Header';
import UserInfo from './UserInfo/UserInfo';
import EventInfo from './EventInfo/EventInfo';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.getUserID();
    }

    //logout
    onPressLogout = async() => {
        try{
            await AsyncStorage.clear(); //clear my id in asyncstorage
            await this.props.navigation.navigate("authentication"); //navigate to authenitcation page
        }
        catch (err){
        console.log(err);
        }
    }

    getUserID = async() => {
        this.setState({"userID": await AsyncStorage.getItem('userID')}) //initialize my userID
    }



    render(){
        return(
            <View style ={styles.homeView}>
                <Header />
                <UserInfo />
                <EventInfo />
                <TouchableOpacity style = {styles.logoutBtn} onPress = {this.onPressLogout}>
                    <Text style = {styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    homeView:{
        flex: 1,
        backgroundColor: "white",
    },
    title: {
        fontSize: 40
    },
    logoutBtn:{
        margin: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor: "#3C3C3D",
        borderRadius: 10,
    },
    logoutText:{
        color: "white",
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
    }
});

export default Home;