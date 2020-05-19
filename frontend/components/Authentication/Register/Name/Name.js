import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

class Name extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: 0, //0: person, 1: organization
        }
    }

    componentDidMount(){
        this.firstnameInput.focus(); //open keyboard 
    }

    onPressChangeState = (input) => {
        this.setState({type: input})
    }

    render(){
        return(
            <View style = {styles.namePageView}>
                <View style = {styles.typeView}>
                    <TouchableOpacity
                        style = {this.state.type === 0 ? styles.typeTabPersonView : styles.typeTabOrgView}
                        onPress = {this.onPressChangeState.bind(this, 0)}>
                        <Text style = {styles.typeTabText}>Person</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {this.state.type === 1 ?  styles.typeTabPersonView : styles.typeTabOrgView}
                        onPress = {this.onPressChangeState.bind(this, 1)}>
                        <Text style = {[styles.typeTabText]}>Organization</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.titleView}>
                    {this.state.type === 0 ?
                    <Text style = {styles.titleText}>What is your name?</Text>:
                    <Text style = {styles.titleText}>What is your organization's name?</Text>}
                </View>
                {this.state.type === 0  ? 
                <View style = {styles.nameInputView}>
                    <TextInput
                        placeholder="firstname"
                        style={styles.nameInput}
                        value = {this.props.firstnameValue}
                        ref = {(input) => {this.firstnameInput = input; }}
                        onChangeText={(firstname) => this.props.firstname(firstname)}
                        onSubmitEditing={() => { this.lastnameInput.focus(); }}
                        maxLength={16}
                        autoCorrect={false}
                        />
                    <TextInput 
                        placeholder="lastname"
                        style={styles.nameInput}
                        value = {this.props.lastnameValue}
                        ref = {(input) => {this.lastnameInput = input; }}
                        onChangeText={(lastname) => this.props.lastname(lastname)}
                        onSubmitEditing={this.props.onPressNext}
                        maxLength={16}
                        autoCorrect={false}/>
                </View> : 
                <View style = {styles.nameInputView}>
                    <TextInput
                        placeholder="organization name"
                        style={styles.nameInput}
                        value = {this.props.firstnameValue}
                        onChangeText={(firstname) => this.props.firstname(firstname)}
                        onSubmitEditing={ this.props.onPressNext }
                        maxLength={32}
                        autoCorrect={false}
                        />
                </View>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    namePageView:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    typeView:{
        flexDirection: "row",
    },
    typeTabPersonView:{
        width: 150,
        margin: 5,
        padding: 5,
        backgroundColor: "#F9A908",
        borderRadius: 10,
    },
    typeTabOrgView:{
        width: 150,
        margin: 5,
        padding: 5,
        backgroundColor: "#FAD68E",
        borderRadius: 10,
    },
    typeTabText:{
        textAlign: "center",
        fontWeight: "500",
        fontSize: 20,
        color: "white",
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
    nameInput:{
        flex: 1,
        height: 40,
        margin: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingLeft: 15,
    },
});

export default Name;