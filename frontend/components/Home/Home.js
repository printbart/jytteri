import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <View style ={styles.container}>
                <Text style = {styles.title}>Home</Text>
                <View style = {styles.logoutBtn}>
                    <Text>Logout</Text>
                </View>
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