import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Platform, Alert } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

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

        let initialPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        }

        this.setState({ initialPosition });
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    )
  }

  render(){
    return(
      <MapView 
      style = {styles.mapView}
      showsUserLocation={true}
      provider = {PROVIDER_GOOGLE}
      initialRegion = {this.state.initialPosition}/>
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