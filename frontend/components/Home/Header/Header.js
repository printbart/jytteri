import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
                    <Text style  = {styles.usernameText}>{this.props.userInfo ? this.props.userInfo.username : null}</Text>
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
        fontWeight: "500",
        fontFamily: 'Helvetica Neue',
        color: "white",
    }
});

export default Header;