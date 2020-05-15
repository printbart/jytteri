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
                <View style = {{flex: 1,}}>

                </View>
                <View style = {styles.usernameView}>
                    <Text style  = {styles.usernameText}>{this.props.userInfo ? this.props.userInfo.username : null}</Text>
                </View>
                <TouchableOpacity style = {styles.editView} onPress = {this.props.editProfile}>
                    <Text style = {styles.editText}>Edit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    headerView: {
        padding: 10,
        paddingTop: 50,
        flexDirection: 'row',
        backgroundColor: "#F9A908",
    },
    usernameView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    usernameText:{
        fontSize: 20,
        fontWeight: "500",
        fontFamily: 'Helvetica Neue',
        color: "white",
    },
    editView: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    editText: {
        fontSize: 15,
        fontWeight: "500",
        fontFamily: 'Helvetica Neue',
        color: "white",
    }
});

export default Header;