import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

//packages
import AsyncStorage from '@react-native-community/async-storage';

class Loading extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
        this.checkUserLogin();
    }

    checkUserLogin = async() => {
        if(await AsyncStorage.getItem('userID')){
            this.props.navigation.navigate("root");
        }
        else{
            this.props.navigation.navigate("authentication");
        }
    }
    render(){
        return(
            <View style ={styles.container}>
                <Text style = {styles.title}>Loading...</Text>
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

export default Loading;