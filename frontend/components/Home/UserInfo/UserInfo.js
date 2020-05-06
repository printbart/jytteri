import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

//images
import defaultProfilePicture from '../../../Images/defaultProfilePicture.png';

class UserInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }


    render(){
        return(
            <View style ={styles.userInfoView}>
                <View style = {styles.profilePictureView}>
                    <Image 
                    source = {defaultProfilePicture}
                    style = {styles.profilePicture}/>
                </View>
                <View style = {styles.nameView}>
                    <View style = {styles.firstnameView}>
                        <Text>Firstname</Text>
                    </View>
                    <View style = {styles.lastnameView}>
                        <Text>LastName</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    userInfoView: {
       flex: 1,
       borderBottomWidth: 0.5,
       borderBottomColor: "lightgrey",
    },
    profilePictureView:{
        alignItems: 'center',
        padding: 10,
    },
    profilePicture:{
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: "grey",
        width: 150,
        height: 150,
        backgroundColor: "white",
    },
    nameView:{
        flexDirection: "row",
        justifyContent: 'center',
    },
    firstnameView:{
        padding: 10,
    },
    lastnameView:{
        padding: 10,
    }
});

export default UserInfo;