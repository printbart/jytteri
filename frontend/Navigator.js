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
        <BottomTab.Navigator tabBarOptions={{showLabel: false, activeTintColor: "#3C3C3D", inactiveTintColor: "grey"}}>
            <BottomTab.Screen name="map" component={Map}
            options = {{
                tabBarIcon: ({color}) => (
                    <FoundationIcon name="map" color={color} size={23} />
                )
            }}/>
            <BottomTab.Screen name="home" component={Home}
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
            <AuthenticationStack.Screen name="login" component = {Login}
            options={{headerShown: false, }}/>
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
                    options={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,}}/>
                    <LoadingStack.Screen name="root" component = {RootStackNavigator}
                    options={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,}}/>
                </LoadingStack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigator