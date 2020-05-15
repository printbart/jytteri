import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//packages
import AsyncStorage from '@react-native-community/async-storage';

//redux
import { connect } from 'react-redux';
import {setProfileData} from './Redux/Actions/profile';

//components
import Header from './Header/Header';
import UserInfo from './UserInfo/UserInfo';

//redux get state
const mapStateToProps = (state) => {
    return{
        data: state.data.profileData
    }
}

//redux set dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        set: (data) => dispatch(setProfileData(data))
    }
}

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        this.getUserInfo();
    }

    //edit profile
    editProfile = () =>{
        this.props.navigation.navigate("editprofile");
    }

    //logout
    onPressLogout = async() => {
        try{
            await AsyncStorage.clear(); //clear my id in asyncstorage
            await this.props.navigation.navigate("authentication"); //navigate to authenitcation page
        }
        catch (err){
        console.log(err);
        }
    }

    getUserInfo = async () => {
        const info = {
            userID: await AsyncStorage.getItem('userID')
        };
        var request = new Request('http://localhost:5000/api/getUserInfo', {
            method: 'POST',
            headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
            body: JSON.stringify(info)
        });
        fetch(request).then((response) => {
            response.json().then((data) => {
                this.setState({userInfo: data[0]})
                this.props.set(data[0]);
            });
        }).catch(function(err){
            console.log(err);
        });
    }

    render(){
        return(
            <View style ={{flex: 1,}}>
                {this.state.userInfo &&
                <View style ={styles.homeView}>
                    <Header
                        userInfo={this.state.userInfo}
                        editProfile = {this.editProfile}/>
                    <UserInfo
                        userInfo = {this.state.userInfo}/>
                    <TouchableOpacity style = {styles.logoutBtn} onPress = {this.onPressLogout}>
                        <Text style = {styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    homeView:{
        flex: 1,
        backgroundColor: "white",
    },
    title: {
        fontSize: 40
    },
    logoutBtn:{
        margin: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor: "#F9A908",
        borderRadius: 10,
        opacity: 0.5,
    },
    logoutText:{
        color: "white",
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);