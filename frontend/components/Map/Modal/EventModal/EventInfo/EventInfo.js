import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

//packages
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


class EventInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        this.setTitle();
    }

    setTitle = () => {
        this.setState({title: this.props.eventItem.eventName});
    }

    clearTitle = () => {
        this.setState({title: null});
    }

    render(){
        return(
            <View style ={styles.eventInfosView}>
                <View style = {styles.eventInfoView}>
                    <View style = {styles.eventHeaderView}>
                        <Text style = {styles.eventInfoText}>Title</Text>
                    </View>
                    <View style = {styles.eventTitleInputView}>
                        <TextInput
                        placeholder="enter title"
                        style={styles.input}
                        value = {this.state.title}
                        onChangeText={(title) => this.setState({title: title})}
                        maxLength={32}/>
                        <TouchableOpacity style = {styles.clearButtonView} onPress = {this.clearTitle}>
                            <MaterialCommunityIcons name = "close-circle" size = {20} color = "lightgrey"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    eventInfosView:{
        flex: 1,
    },
    eventInfoView: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "grey",
    },
    eventHeaderView:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    eventTitleInputView:{
        flexDirection: 'row',
        flex: 5,
    },
    eventInfoText: {
        fontSize: 15,
        fontWeight: "200",
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    },
    input:{
        flex: 1,
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    },
    clearButtonView:{
        justifyContent: 'flex-end',
        marginTop: 5,
        marginRight: 5,
    }
});

export default EventInfo;