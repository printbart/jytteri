import React, { Component } from 'react';
import { View } from 'react-native';

//navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//component
import Map from './components/Map/Map';
import Home from './components/Home/Home';



const BottomTab = createBottomTabNavigator();

const RootStack = createStackNavigator();

const BottomStackScreen = () => {
    return(
        <BottomTab.Navigator>
            <BottomTab.Screen name="Map" component={Map} />
            <BottomTab.Screen name="Home" component={Home} />
        </BottomTab.Navigator>
    )
}

class Navigator extends Component {
    render(){
        return (
            <NavigationContainer>
                <RootStack.Navigator>
                    <RootStack.Screen name="bottomNav" component = {BottomStackScreen}
                    options={{headerShown: false}}/>
                </RootStack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigator