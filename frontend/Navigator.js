import React, { Component } from 'react';

//navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

//icons
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


//component
import Map from './components/Map/Map';
import Profile from './components/Profile/Profile';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import Loading from './components/Loading/Loading';
import AuthMain from './components/Authentication/AuthMain/AuthMain';

import EditProfile from './components/Profile/EditProfile/EditProfile';
import EditFirstName from './components/Profile/EditProfile/EditProfileInfo/EditFirstName/EditFirstName';
import EditLastName from './components/Profile/EditProfile/EditProfileInfo/EditLastName/EditLastName';



const BottomTab = createBottomTabNavigator();

const LoadingStack = createStackNavigator();
const RootStack = createStackNavigator();
const AuthenticationStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const BottomStackScreen = () => {
    return(
        <BottomTab.Navigator tabBarOptions={{showLabel: false, activeTintColor: "#3C3C3D", inactiveTintColor: "grey"}}>
            <BottomTab.Screen name="map" component={Map}
            options = {{
                tabBarIcon: ({color}) => (
                    <FoundationIcon name="map" color={color} size={23} />
                )
            }}/>
            <BottomTab.Screen name="home" component={ProfileStackNavigator}
            options={{
                tabBarIcon: ({color}) => (
                  <FontAwesomeIcon name="user-o" color={color} size={23} />
                )
            }}/>
        </BottomTab.Navigator>
    )
}

const AuthenticationStackNavigator = () => {
    return(
        <AuthenticationStack.Navigator>
            <AuthenticationStack.Screen name="authmain" component = {AuthMain} options={{headerShown: false, }}/>
            <AuthenticationStack.Screen name="login" component = {Login} options={{headerShown: false, }}/>
            <AuthenticationStack.Screen name="register" component = {Register} options={{headerShown: false}}/>
        </AuthenticationStack.Navigator>
    )
}

const ProfileStackNavigator = () => {
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name = "profile" component = {Profile}
            options={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            }}/>
            <ProfileStack.Screen
            name = "editprofile"
            component = {EditProfile}
            options = {{
                title: 'Edit Profile',
                headerTintColor: "white",
                headerBackTitleVisible: false,
                headerStyle:{backgroundColor: "#F9A908"}
            }}/>
            <ProfileStack.Screen
            name = "editfirstname"
            component = {EditFirstName}
            options = {{
                title: 'First Name',
                headerTintColor: "white",
                headerBackTitleVisible: false,
                headerStyle:{backgroundColor: "#F9A908"}
            }}/>
            <ProfileStack.Screen
            name = "editlastname"
            component = {EditLastName}
            options = {{
                title: 'Last Name',
                headerTintColor: "white",
                headerBackTitleVisible: false,
                headerStyle:{backgroundColor: "#F9A908"}
            }}/>
        </ProfileStack.Navigator>
    )
}

const RootStackNavigator = () => {
    return(
        <RootStack.Navigator>
            <RootStack.Screen name="main" component = {BottomStackScreen}
            options={{headerShown: false}}/>
        </RootStack.Navigator>
    )
}

class Navigator extends Component {
    render(){
        return (
            <NavigationContainer>
                <LoadingStack.Navigator>
                    <LoadingStack.Screen name="loading" component = {Loading}
                    options={{headerShown: false}}/>
                    <LoadingStack.Screen name="authentication" component = {AuthenticationStackNavigator}
                    options={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,}}/>
                    <LoadingStack.Screen name="root" component = {RootStackNavigator}
                    options={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,}}/>
                </LoadingStack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigator