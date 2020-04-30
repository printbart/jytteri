import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput,TouchableOpacity } from 'react-native';

//packages
import AsyncStorage from '@react-native-community/async-storage';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    //navigate to login page
    onPressNavigateLogin = () => {
        this.props.navigation.navigate("login");
    }

    //navigate to home if valid
    onPressRegister = () => {
        var data = {
            username: this.state.usernameValue
          }
          var request = new Request('http://localhost:5000/api/register', {
            method: 'POST',
            headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
            body: JSON.stringify(data)
          });
          fetch(request).then((response) => {
            response.json().then((data) => {
                console.log(data);
            });
          }).catch(function(err){
            console.log(err);
        });
    }

    render(){
        return(
            <View style = {styles.LoginView}>
                <View style = {styles.titleView}>
                    <Text style = {styles.titleText}>Register</Text>
                </View>
                <View style = {styles.inputView}>
                    <TextInput placeholder="username" style={styles.input} autoCapitalize = 'none'
                        onChangeText={(username) => this.setState({usernameValue: username})} maxLength={16}/>
                    <TouchableOpacity style = {styles.toggleRegisterView} onPress = {this.onPressRegister}>
                        <Text style = {styles.toggleRegisterText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.toggleRegisterView} onPress = {this.onPressNavigateLogin}>
                        <Text style = {styles.toggleRegisterText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    LoginView:{
        flex: 1,
        backgroundColor: "white",
    },
    titleView : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 40
    },
    inputView:{
        flex: 1,
        margin: 10,
        justifyContent: 'center'
    },
    input: {
        height: 40,
        margin: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingLeft: 15,
    },
    toggleRegisterView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    toggleRegisterText:{
        fontSize: 20,
    }
});

export default Login;