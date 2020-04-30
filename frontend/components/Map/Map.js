import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Alert } from 'react-native';

//libaries
import { request, PERMISSIONS } from 'react-native-permissions';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//components
import SearchModal from './SearchModal/SearchModal';
import LocateMeButton from './LocateMeButton/LocateMeButton';
import Menu from './Menu/Menu';


class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchModalVisible: false,
      searchData: [],
    }
  }

  componentDidMount(){
    this.requestLocationPermission();
  }

  //toggle search modal
  toggleModal = (type) => {
    this.setState({searchModalVisible: type});
  }

  //check if permission is enabled
  requestLocationPermission = async() => {
    if(Platform.OS === "ios"){
    var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if(response === "granted"){
        this.locateCurrentPosition();
      }
    }
  }

  //calculate my current location
  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        //console.log(JSON.stringify(position));

        const myCurrentPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        }

        this.setState({ myCurrentPosition });
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    )
  }

  //center your current location
  centerMyLocation = () => {
    const{ latitude, longitude, latitudeDelta, longitudeDelta } = this.state.myCurrentPosition;
    this.map.animateToRegion({
      latitude, longitude, latitudeDelta, longitudeDelta
    });
  }

  //zoom in to the pressed location
  searchLocation = async(item) =>{
    this.setState({myMarker: null});
    const r = {
      latitude: item.geometry.location.lat,
      longitude: item.geometry.location.lng,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    };
    await this.map.animateToRegion(r, 2000); //zoom in for delta 2000ms
    await this.setState({myMarker: r}); //set marker
  }

  //focus on the marker when pressed
  onPressMarker(input){
    let r = {
      latitude: input.latitude,
      longitude: input.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    };
    this.map.animateToRegion(r, 1000);
  }

  render(){
    return(
      <View style = {styles.mapContainer}>
        <SearchModal
          modalState = {this.state.searchModalVisible}
          myCurrentPosition = {this.state.myCurrentPosition}
          toggleModal = {this.toggleModal}
          searchLocation = {this.searchLocation}/>
        <MapView 
          style = {styles.mapView}
          ref={(map) => {this.map = map}}
          showsUserLocation={true}
          provider = {PROVIDER_GOOGLE}
          initialRegion = {this.state.myCurrentPosition}>

          {this.state.myMarker &&
            <Marker
              coordinate={{latitude: this.state.myMarker.latitude, longitude: this.state.myMarker.longitude}}
              onPress={this.onPressMarker.bind(this, this.state.myMarker)}>
            </Marker>
          }
        </MapView>
        <LocateMeButton 
          centerMyLocation = {this.centerMyLocation}/>
        <Menu 
          toggleModal = {this.toggleModal}
          myMarker = {this.state.myMarker}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer:{
    flex: 1,
  },
  mapView: {
    flex: 1,
  },
});

export default Map;