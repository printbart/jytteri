import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

//packages
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class EditEventTitle extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <View style = {styles.eventTitleView}>
                <View style = {styles.eventHeaderView}>
                    <Text style = {styles.eventInfoText}>Title</Text>
                </View>
                <View style = {styles.eventTitleInputView}>
                    <TextInput
                    placeholder="enter title"
                    style={styles.input}
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    value = {this.props.title}
                    onChangeText={(title) => this.props.onChangeTitle(title)}
                    maxLength={32}
                    onSubmitEditing={this.props.toggleDateKeyboard}
                    onFocus = {this.props.hideDateKeyboard}/>
                    <TouchableOpacity style = {styles.clearButtonView} onPress = {this.props.clearTitle}>
                        <MaterialCommunityIcons name = "close-circle" size = {20} color = "white"/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    eventTitleView: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: "#F9A908",
        opacity: 0.7,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    eventHeaderView: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    eventTitleInputView: {
        flexDirection: 'row',
        flex: 5,
    },
    eventInfoText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
    },
    input: {
        flex: 1,
        fontFamily: 'Helvetica Neue',
        color: "white",
        fontWeight: "500",
        fontSize: 15,
    },
    clearButtonView: {
        justifyContent: 'center',
    },
});

export default EditEventTitle;