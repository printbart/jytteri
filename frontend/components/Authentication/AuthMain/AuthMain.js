import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

//image
import JytteriLogo from '../../../Images/JytteriLogo.png';

class AuthMain extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    onPressRegister = () => {
        this.props.navigation.navigate("register");
    }

    onPressLogin = () => {
        this.props.navigation.navigate("login");
    }

    render(){
        return(
            <View style = {styles.authMainView}>
                <View style = {styles.headerView}>
                    <Text style = {styles.headerText}>Jytteri</Text>
                </View>
                <View style = {styles.bodyView}>
                    <Image
                        source = {JytteriLogo}
                        style = {styles.logo}/>
                </View>
                <View style = {styles.buttonsView}>
                    <TouchableOpacity style = {styles.loginButtonView} onPress = {this.onPressLogin}>
                        <Text style = {styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.reigisterButtonView} onPress = {this.onPressRegister}>
                        <Text style = {styles.registerButtonText}> Register </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    authMainView: {
        flex: 1,
        backgroundColor: "white",
    },
    headerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 50,
        fontFamily: 'Zapfino',
    },
    bodyView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        resizeMode:'contain',
        width: 175,
        height: 175,
    },
    buttonsView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtonView: {
        padding: 10,
        backgroundColor: "#f9a908",
        paddingLeft: 100,
        paddingRight: 100,
        borderRadius: 10,
    },
    loginText: {
        fontSize: 20,
        color: "white",
        fontFamily: "Kailasa",
    },
    reigisterButtonView: {
        flexDirection: "row",
        padding: 10,
    },
    registerText :{
        padding: 2.5,
        fontSize: 15,
        fontFamily: "Kailasa",
        color: "#444444",
    },
    registerButtonText: {
        fontSize: 20,
        color: "#f9a908",
        fontFamily: "Kailasa",
    }
});

export default AuthMain;