import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//packages
import AsyncStorage from '@react-native-community/async-storage';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    //logout
    onPressLogout = async() => {
        try{
            await AsyncStorage.clear(); //clear my id in asyncstorage
            this.props.navigation.navigate("authentication"); //navigate to authenitcation page
          }
          catch (err){
            console.log(err);
          }
    }

    render(){
        return(
            <View style ={styles.container}>
                <Text style = {styles.title}>Home</Text>
                <TouchableOpacity style = {styles.logoutBtn} onPress = {this.onPressLogout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 40
    }
});

export default Home;