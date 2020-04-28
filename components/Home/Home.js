import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Home extends Component {
    render(){
        return(
            <View style ={styles.container}>
                <Text style = {styles.title}>Home</Text>
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