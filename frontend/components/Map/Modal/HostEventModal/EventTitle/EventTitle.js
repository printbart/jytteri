import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

//packages
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class EventTitle extends Component {
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
                    placeholder="Title"
                    style={styles.input}
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    value = {this.props.title}
                    onChangeText={(title) => this.props.setTitle(title)}
                    maxLength={32}
                    onFocus = {this.props.hideDateKeyboard}/>
                    <TouchableOpacity style = {styles.clearButtonView} onPress = {this.props.clearTitle}>
                        <MaterialCommunityIcons name = "close-circle" size = {20} color = "lightgrey"/>
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
        borderBottomWidth: 0.5,
        borderBottomColor: "#808080",
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
        fontWeight: "500",
        color: "#3C3C3D",
    },
    input: {
        flex: 1,
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    },
    clearButtonView: {
        justifyContent: 'center',
    },
});

export default EventTitle;