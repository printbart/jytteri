import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

//image
import defaultProfilePicture from '../../../../../Images/defaultProfilePicture.png';

class EventHost extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <View style = {styles.hostView}>
                <View style = {styles.headercenterView}>
                    <Text style = {styles.headerCenterText}>Host</Text>
                </View>
                <View style = {styles.infoView}>
                    <View style = {styles.profilePictureView}>
                        <Image
                            source = {defaultProfilePicture}
                            style = {styles.profilePicture}/>
                    </View>
                    <View style = {styles.usernameView}>
                        <Text style = {styles.usernameText}>{this.props.hostName}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    hostView: {
        borderBottomWidth: 0.5,
        borderBottomColor: "lightgrey",
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
    infoView:{
       padding: 10,
    },
    profilePictureView:{
        alignItems: "center",
    },
    profilePicture:{
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: "grey",
        width: 75,
        height: 75,
        backgroundColor: "white",
    },
    usernameView:{
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
    },
    usernameText: {
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    },
});

export default EventHost;