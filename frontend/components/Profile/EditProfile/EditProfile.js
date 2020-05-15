import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

//components
import EditProfilePicture from './EditProfilePicture/EditProfilePicture';
import EditProfileInfo from './EditProfileInfo/EditProfileInfo';

class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    navigateEditFirstName = () => {
        this.props.navigation.navigate("editfirstname");
    }

    navigateEditLastName = () => {
        this.props.navigation.navigate("editlastname");
    }

    render(){
        return(
            <View style = {styles.editProfileView}>
                <EditProfilePicture />
                <EditProfileInfo
                    navigateEditFirstName = {this.navigateEditFirstName}
                    navigateEditLastName = {this.navigateEditLastName}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    editProfileView:{
        flex: 1,
        backgroundColor: "white",
    },
});

export default EditProfile;