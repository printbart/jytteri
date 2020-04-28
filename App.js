import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';

export default class App extends Component {

  componentDidMount(){
    this.requestLocationPermission();
  }

  requestLocationPermission = async() => {
    if(Platform.OS === "ios"){
    var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    console.log('iPhone:' + response);

      if(response === "granted"){
        this.locateCurrentPosition();
      }
    }
  }

  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(JSON.stringify(position));
      }
    )
  }

  render(){
    return(
      <MapView 
      style = {styles.mapView}
      showUserLocation={true}
      provider = {PROVIDER_GOOGLE}
      region = {{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40
  },
  mapView: {
    height: '100%'
  }
});