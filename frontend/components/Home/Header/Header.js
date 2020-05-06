import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }


    render(){
        return(
            <View style ={styles.headerView}>
                <View style = {styles.usernameView}>
                    <Text style  = {styles.usernameText}>*Input username*</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    headerView: {
        padding: 10,
        paddingTop: 50,
        flexDirection: 'row',
        backgroundColor: "#3C3C3D",
        alignItems: 'center',
        justifyContent: 'center',
    },
    usernameView: {
    },
    usernameText:{
        fontSize: 20,
        fontFamily: 'Helvetica Neue',
        color: "white",
    }
});

export default Header;