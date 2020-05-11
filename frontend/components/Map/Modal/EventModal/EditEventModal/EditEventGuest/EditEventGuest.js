import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

//icon
import FoundationIcons from 'react-native-vector-icons/Foundation';

//image
import defaultProfilePicture from '../../../../../../Images/defaultProfilePicture.png';

class EditEventGuest extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    renderGuests = ({item}) => {
        return(
            <View style = {styles.guestView}>
                <View style = {styles.profilePictureView}>
                    <Image
                        source = {defaultProfilePicture}
                        style = {styles.profilePicture}/>
                </View>
                <View style = {styles.usernameView}>
                    <Text style = {styles.usernameText}>{item.username}</Text>
                </View>
                <View style ={styles.kickIconView}>
                    <TouchableOpacity style = {styles.kickIconPaddingView}>
                        <FoundationIcons name = "foot" size={25} color = "#ffedc7" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render(){
        return(
            <View style = {styles.guestsView}>
                <View style = {styles.headercenterView}>
                    <Text style = {styles.headerCenterText}>Guest</Text>
                </View>
                {this.props.guests ?
                <FlatList
                    data = {this.props.guests}
                    renderItem = {this.renderGuests}
                    keyExtractor = {(item)=>item.userID.toString()}/> :
                <View style = {styles.noneMessageView}>
                    <Text style = {styles.noneMessage}>No one at the moment</Text>
                </View>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    guestsView: {
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
    kickIconView:{
        flex: 1,
        paddingRight: 25,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    kickIconPaddingView:{
        width: 30,
        backgroundColor: "#F9A908",
        borderRadius: 50,
        alignItems: "center",
        paddingRight: 2,
    }
});

export default EditEventGuest;