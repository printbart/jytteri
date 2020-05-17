import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Modal } from 'react-native';

//component
import Header from './UserProfileHeader/UserProfileHeader';
import UserInfo from './UserInfo/UserInfo';

//icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <Modal
                visible={this.props.userProfileModalVisible}
                animationType="slide">
                <View style ={styles.userProfileView}>
                    <View style ={styles.homeView}>
                        <Header
                            userData = {this.props.userProfileModalData}
                            closeModal = {this.props.userProfileModalToggle}/>
                        <UserInfo
                            userData = {this.props.userProfileModalData}/>
                    </View>
                </View>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    userProfileView:{
        flex: 1,
        backgroundColor: "white",
    },
    homeView: {
        flex: 1,
    }
});

export default UserProfile;