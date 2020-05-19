import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

//images
import defaultProfilePicture from '../../../Images/defaultProfilePicture.png';

//redux
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        profileData: state.data.profileData
    }
}


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
                        <Text style = {styles.nameText}>{ this.props.profileData.firstname }</Text>
                    </View>
                    <View style = {styles.lastnameView}>
                        <Text style = {styles.nameText}>{ this.props.profileData.lastname }</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userInfoView: {
       flex: 1,
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
    },
    nameText:{
        fontSize: 20,
        fontWeight: "500",
        fontFamily: 'Helvetica Neue',
    }
});

export default connect(mapStateToProps)(UserInfo);