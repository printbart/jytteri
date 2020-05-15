import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

//image
import defaultProfilePicture from '../../../../Images/defaultProfilePicture.png';

//libraries
import ImagePicker from 'react-native-image-picker';

class EditProfilePicture extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    handleChoosePhoto = () => {
        const options = {};
        ImagePicker.launchImageLibrary(options, response => {
            if(response.uri){
                this.setState({photo: response})
            }
        });
    }

    render(){
        return(
            <View style = {styles.editProfilePictureView}>
                <TouchableOpacity style = {styles.defaultProfilePictureView}>
                    <Image
                        source = {this.state.photo ? {uri: this.state.photo.uri} : defaultProfilePicture}
                        style = {styles.defaultProfilePicture}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.editProfilePictureButtonView} onPress = {this.handleChoosePhoto}>
                    <Text style = {styles.editProfilePictureButtonText}>Edit Profile Picture</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    editProfilePictureView:{
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    defaultProfilePictureView:{
    },
    defaultProfilePicture: {
        borderRadius: 50,
        width: 100,
        height: 100,
        borderWidth: 0.5,
        borderColor: "grey",
    },
    editProfilePictureButtonView: {
        padding: 10,
    },
    editProfilePictureButtonText: {
        fontSize: 15,
        fontWeight: "500",
        fontFamily: 'Helvetica Neue',
        color: "#F9A908",
    }
});

export default EditProfilePicture;