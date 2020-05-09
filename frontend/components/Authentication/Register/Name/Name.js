import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class Name extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        this.firstnameInput.focus(); //open keyboard 
    }

    render(){
        return(
            <View style = {styles.namePageView}>
                <View style = {styles.titleView}>
                    <Text style = {styles.titleText}>What is your name?</Text>
                </View>
                <View style = {styles.nameInputView}>
                    <TextInput
                        placeholder="firstname"
                        style={styles.firstnameInput}
                        ref = {(input) => {this.firstnameInput = input; }}
                        onChangeText={(firstname) => this.props.firstname(firstname)}
                        onSubmitEditing={() => { this.lastnameInput.focus(); }}
                        maxLength={16}
                        autoCorrect={false}
                        />
                    <TextInput 
                        placeholder="lastname"
                        style={styles.lastnameInput}
                        ref = {(input) => {this.lastnameInput = input; }}
                        onChangeText={(lastname) => this.props.lastname(lastname)}
                        maxLength={16}
                        autoCorrect={false}
                        onSubmitEditing={this.props.onPressNext}/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    namePageView:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleView:{
        padding: 25,
    },
    titleText:{
        fontSize: 20,
    },
    nameInputView:{
        flexDirection: "row"
    },
    firstnameInput:{
        flex: 1,
        height: 40,
        margin: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingLeft: 15,
    },
    lastnameInput : {
        flex: 1,
        height: 40,
        margin: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingLeft: 15,
    },
});

export default Name;