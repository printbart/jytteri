import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

class Password extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        this.passwordInput.focus();
    }

    render(){
        return(
            <View style = {styles.passwordView}>
                <View style = {styles.titleView}>
                    <Text style = {styles.titleText}>Type your password</Text>
                </View>
                <TextInput
                    placeholder="password"
                    style={styles.input}
                    autoCapitalize = 'none'
                    ref = {(input) => {this.passwordInput = input; }}
                    onChangeText={(password) => this.props.password(password)}
                    onSubmitEditing={this.props.register}
                    maxLength={16}
                    autoCorrect={false}
                    secureTextEntry={true}/>
                <TouchableOpacity style = {styles.registerBtnView} onPress = {this.props.register}>
                    <Text style = {styles.registerBtnText}>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    passwordView:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleView:{
        padding: 25,
    },
    titleText:{
        fontSize: 20,
    },
    input: {
        width: "80%",
        height: 40,
        margin: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingLeft: 15,
    },
    registerBtnView: {
        margin: 25,
        backgroundColor: "#F9A908",
        padding: 10,
        width: "50%",
        alignItems: "center",
        borderRadius: 10,
    },
    registerBtnText: {
        color: "white",
    }
});

export default Password;