import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

//image
import defaultProfilePicture from '../../../../../Images/defaultProfilePicture.png';

class EventGuest extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    renderGuests = ({item}) => {
        return(
            <TouchableOpacity style = {styles.guestView} onPress = {this.props.navigateToUser.bind(this,item.userID)}>
                <View style = {styles.profilePictureView}>
                    <Image
                        source = {defaultProfilePicture}
                        style = {styles.profilePicture}/>
                </View>
                <View style = {styles.usernameView}>
                    <Text style = {styles.usernameText}>{item.username}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <View style = {styles.guestsView}>
                <View style = {styles.headercenterView}>
                    <Text style = {styles.headerCenterText}>Guest</Text>
                </View>
                {this.props.guests.length ?
                <FlatList
                    data = {this.props.guests}
                    renderItem = {this.renderGuests}
                    keyExtractor = {(item)=>item.userID.toString()}/> :
                <View style = {styles.noneMessageView}>
                    <Text style = {styles.noneMessageText}>No one at the moment</Text>
                </View>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    guestsView: {
        flex: 1,
        padding: 10,
    },
    headercenterView: {
        padding: 5,
        alignItems: "center",
        justifyContent: 'center',
    },
    headerCenterText:{
        fontSize: 20,
        fontWeight: "500"
    },
    guestView: {
        flexDirection: "row",
    },
    profilePictureView:{
        alignItems: "center",
    },
    profilePicture:{
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: "grey",
        width: 50,
        height: 50,
        backgroundColor: "white",
    },
    usernameView:{
        padding: 10,
        justifyContent: "center",
    },
    usernameText:{
        fontWeight: "500",
        fontSize: 15,
    },
    noneMessageView: {
        padding: 10,
        alignItems: "center",
    },
    noneMessageText: {
        fontSize: 20,
        fontWeight: "300",
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    }
});

export default EventGuest;