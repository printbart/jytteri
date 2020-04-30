import React, { Component } from 'react';
import { View } from 'react-native';

//navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//component
import Map from './components/Map/Map';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import Loading from './components/Loading/Loading';



const BottomTab = createBottomTabNavigator();

const LoadingStack = createStackNavigator();
const RootStack = createStackNavigator();
const AuthenticationStack = createStackNavigator();

const BottomStackScreen = () => {
    return(
        <BottomTab.Navigator>
            <BottomTab.Screen name="Map" component={Map} />
            <BottomTab.Screen name="Home" component={Home} />
        </BottomTab.Navigator>
    )
}

const AuthenticationStackNavigator = () => {
    return(
        <AuthenticationStack.Navigator>
            <AuthenticationStack.Screen name="login" component = {Login} options={{headerShown: false}}/>
            <AuthenticationStack.Screen name="register" component = {Register} options={{headerShown: false}}/>
        </AuthenticationStack.Navigator>
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
                    options={{headerShown: false}}/>
                    <LoadingStack.Screen name="root" component = {RootStackNavigator}
                    options={{headerShown: false}}/>
                </LoadingStack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigator