import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

//packages
import AsyncStorage from '@react-native-community/async-storage';

//logo
import JytteriLogo from '../../../Images/JytteriLogo.png';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    //navigate to register
    onPressReigister = () =>{
        this.props.navigation.navigate("register");
    }

    //navigate to authentication main
    onPressBack = () => {
        this.props.navigation.navigate("authmain");
    }

    //navigate to home if valid
    onPressLogin = () => {
        var data = {
            username: this.state.username,
            password: this.state.password,
          }
          var request = new Request('http://localhost:5000/api/login', {
            method: 'POST',
            headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
            body: JSON.stringify(data)
          });
          fetch(request).then((response) => {
            response.json().then(async(data) => {
                if(data.password){ //encrpytion password matches
                    await AsyncStorage.setItem('userID', data.userID.toString()); //store userID globally
                    this.props.navigation.navigate("root"); //navigate to main page
                }
            });
          }).catch(function(err){
            console.log(err);
        });
    }

    render(){
        return(
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                <View style = {styles.loginView}>
                    <View style = {styles.logoView}>
                        <Image
                            source = {JytteriLogo}
                            style = {styles.logo}/>
                    </View>
                    <View style = {styles.loginInputView}>
                        <TextInput
                            placeholder="username"
                            style={styles.input}
                            autoCapitalize = 'none'
                            ref = {(input) => {this.usernameInput = input; }}
                            onChangeText={(username) => this.setState({username})}
                            onSubmitEditing={() => { this.passwordInput.focus(); }}
                            maxLength={16}/>
                        <TextInput
                            placeholder="password"
                            style={styles.input}
                            autoCapitalize = 'none'
                            ref = {(input) => {this.passwordInput = input; }}
                            onChangeText={(password) => this.setState({password})}
                            onSubmitEditing={this.onPressLogin}
                            maxLength={16}
                            secureTextEntry={true}/>
                        <TouchableOpacity style = {styles.loginBtnView} onPress = {this.onPressLogin}>
                            <Text style = {styles.loginBtnText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.backBtnView} onPress = {this.onPressBack}>
                            <Text style = {styles.backBtnText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style = {styles.registerView} onPress = {this.onPressReigister}>
                            <Text style = {styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    loginView:{
        flex: 1,
        backgroundColor: "white",
    },
    logoView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo : {
        resizeMode:'contain',
        width: 50,
        height: 50,
    },
    loginInputView:{
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: "lightgrey",
    },
    input: {
        height: 40,
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingLeft: 15,
    },
    loginBtnView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f9a908",
        borderRadius: 5,
        padding: 5,
        margin: 20,
    },
    loginBtnText: {
        fontSize: 20,
        color: "white",
    },
    backBtnView:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    backBtnText: {
        color: "#f9a908",
    },
    registerView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffd685",
        borderRadius: 5,
        padding: 5,
        margin: 20,
        opacity: 0.5,
        marginBottom: 50,
    },
    registerText : {
        fontSize: 20,
        color: "#ed9e00",
        fontWeight: "500",
        opacity: 1,
    }
});

export default Login;