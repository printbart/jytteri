import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

//logo
import JytteriLogo from '../../../Images/JytteriLogo.png';

//components
import Type from './Type/Type';
import Name from './Name/Name';
import Username from './Username/Username';
import Password from './Password/Password';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 0, //0: name, 1: username, 2: password
        }
    }

    //navigate to login page
    onPressNavigateLogin = () => {
        this.props.navigation.navigate("login");
    }

    //go back home
    onPressHome = () => {
        this.props.navigation.navigate("authmain");
    }

    //when pressed return on keyboard
    onPressNext = () => {
        this.setState({page: this.state.page+1});
    }

    //set firstname on keyboard change
    setFirstName = (firstname) => {
        this.setState({firstname: firstname})
    }

    //set lastname on keyboard change
    setLastName = (lastname) => {
        this.setState({lastname: lastname})
    }

    //set username on keyboard change
    setUsername = (username) => {
        this.setState({username: username});
    }

    //set password on keyboard change
    setPassword = (password) => {
        this.setState({password})
    }

    //navigate to home if valid
    onPressRegister = () => {
        var data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            password: this.state.password,
          }
          var request = new Request('http://localhost:5000/api/register', {
            method: 'POST',
            headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
            body: JSON.stringify(data)
          });
          fetch(request).then((response) => {
            response.json().then((data) => {
                if(data.result){
                    this.props.navigation.navigate("root");
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
                    <View style = {styles.inputView}>
                        {this.state.page === 0 ?
                        <Type />:
                        this.state.page === 1 ?
                        <Name
                            onPressNext = {this.onPressNext}
                            firstname = {this.setFirstName}
                            lastname = {this.setLastName}/>:
                        this.state.page === 2 ?
                        <Username
                            onPressNext = {this.onPressNext}
                            username = {this.setUsername}/>:
                        <Password
                            password = {this.setPassword}
                            register = {this.onPressRegister}/>}
                    </View>
                    <TouchableOpacity style = {styles.backView} onPress = {this.onPressHome}>
                        <Text style = {styles.backText}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    loginView: {
        flex: 1,
        backgroundColor: "white",
    },
    logo : {
        resizeMode:'contain',
        width: 50,
        height: 50,
    },
    logoView : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        flex: 2,
        margin: 10,
    },
    input: {
        height: 40,
        margin: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingLeft: 15,
    },
    backView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backText: {
        color: "#F9A908",
        fontWeight: "bold",
        fontSize: 15,
        fontFamily: "Kailasa",
    },
});

export default Login;