import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TextInput, Modal, TouchableOpacity, Platform, Alert } from 'react-native';

//libaries
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import _ from "lodash";

//api key
import {googleMapSearchApiKey} from "../../apiKey";


class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchModalVisible: false,
      searchData: [],
      markers: [],
    }
    this.onChangeDestinationDebounced = _.debounce(this.onChangeDestination, 1000);
  }

  componentDidMount(){
    this.requestLocationPermission();
  }

  onPressSearchModal(input){
    this.setState({searchModalVisible: input, searchData: [],});
  }

  requestLocationPermission = async() => {
    if(Platform.OS === "ios"){
    var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

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
          longitudeDelta: 0.035,
        }

        this.setState({ initialPosition });
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    )
  }

  centerMap = () => {
    const{ latitude, longitude, latitudeDelta, longitudeDelta } = this.state.initialPosition;
    console.log(this.state.initialPosition);
    this.map.animateToRegion({
      latitude, longitude, latitudeDelta, longitudeDelta
    });
  }

  async onChangeDestination(destination){
    this.setState({ destination });
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?input=${destination}&location=${this.state.initialPosition.latitude},${this.state.initialPosition.longitude}&radius=2000&key=${googleMapSearchApiKey}`;
    try{
      const result = await fetch(apiUrl);
      const json = await result.json();
      this.setState({
        searchData: json.results
      })
    }
    catch (err) {
      console.log(err);
    }
  }

  async onPressLocation(item){
    this.onPressSearchModal(false);
    let r = {
      latitude: item.geometry.location.lat,
      longitude: item.geometry.location.lng,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    };
    await this.setState({markers: [r]});
    await this.map.animateToRegion(r, 2000);
  }

  onPressMarker(input){
    let r = {
      latitude: input.latitude,
      longitude: input.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    };
    this.map.animateToRegion(r, 1000);
  }

  onPressSetLocation(){
  }

  renderSearchLocation = ({item}) =>{
    return(
      <TouchableOpacity style = {styles.searchLocationView} onPress = {this.onPressLocation.bind(this, item)}>
        <View style = {styles.searchLocationIconView}>
          <Image source={{uri: item.icon}} style = {styles.searchLocationIconImage}/>
        </View>
        <View style = {styles.searchLocationBodyView}>
          <View style = {styles.searchLocationNameView}>
            <Text style = {styles.searchLocationNameText}>{item.name}</Text>
          </View>
          <View style = {styles.searchLocationAddressView}>
            <Text style = {styles.searchLocationAddressText}>{item.formatted_address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render(){
    return(
      <View style = {styles.mapContainer}>
        <Modal 
        visible={this.state.searchModalVisible}
        animationType="slide">
          <View style={styles.modalView}>
            <View style = {styles.modalTopView}>
              <TouchableOpacity style = {styles.cancelView} onPress={this.onPressSearchModal.bind(this, false)}>
                <MaterialIcons name="close" size={25} color="grey"/>
              </TouchableOpacity>
              <View style = {styles.searchTextInputView}>
                <TextInput style = {styles.searchTextInput}
                placeholder="Where?"
                onChangeText={destination => this.onChangeDestinationDebounced(destination)}/>
              </View>
            </View>
            <FlatList
            data = {this.state.searchData}
            renderItem = {this.renderSearchLocation}
            keyExtractor = {(item)=>item.id}
            />
          </View>
        </Modal>
  
        <MapView 
        style = {styles.mapView}
        ref={(map) => {this.map = map}}
        showsUserLocation={true}
        provider = {PROVIDER_GOOGLE}
        initialRegion = {this.state.initialPosition}>
          {this.state.markers.map((value, index) => {
            return(
            <Marker
            key = {index}
            coordinate={{latitude: value.latitude, longitude: value.longitude}}
            onPress={this.onPressMarker.bind(this, value)}>
            </Marker>
            )
          })}
        </MapView>
        <TouchableOpacity style = {styles.locateMeButtonView} onPress = {this.centerMap}>
          <MaterialIcons name="my-location" size={25} color="#3C3C3D"/>
        </TouchableOpacity>
        <View style={styles.bottomModalView}>
          <TouchableOpacity style = {styles.bottomHeaderView} onPress={this.onPressSearchModal.bind(this, true)}>
            <Text style = {styles.bottomHeaderText}>Where?</Text>
          </TouchableOpacity>
          <View style = {styles.noticeView}>
            {!this.state.markers.length ?
            <Text style = {styles.noticeText}>Find a location</Text>
           :
          <TouchableOpacity style = {styles.addLocationButtonView} onPress = {this.onPressSetLocation.bind(this)}>
            <Text style = {styles.addLocationButtonText}>Set Location</Text>
          </TouchableOpacity>}
          </View>
        </View>
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
  locateMeButtonView:{
    width: 40,
    height: 40,
    position: 'absolute',
    backgroundColor: "#f5f5f5",
    right: 10,
    bottom: '30%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#3C3C3D",
    shadowRadius: 7.5,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalView:{
    flex: 1,
    paddingTop: 30,
  },
  modalTopView:{
    margin: 10,
    height: 50,
    flexDirection: 'row',
  },
  cancelView:{
    justifyContent: 'center',
  },
  cancelText:{
    fontSize: 20,
    fontWeight: "200",
    padding: 5,
  },
  searchTextInputView:{
    flex: 1,
    width: "100%",
    padding: 5,
  },
  searchTextInput:{
    flex: 1,
    backgroundColor: "#f5f5f5",
    fontSize: 20,
    borderRadius: 5,
    padding: 5,
  },

  bottomModalView:{
    height: "25%",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
  },
  bottomHeaderView: {
    height: 50,
    borderRadius: 50,
    backgroundColor: "#f5f5f5",
    justifyContent: 'center',
  },
  bottomHeaderText:{
    paddingLeft: 20,
    fontSize: 20,
    color: "#3C3C3D",
    fontFamily: 'Helvetica Neue',
  },
  searchLocationView:{
    flexDirection: 'row',
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.5,
  },
  searchLocationIconView:{
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchLocationIconImage:{
    width: 25,
    height: 25,
    marginRight: 5,
  },
  searchLocationBodyView:{
    flexDirection: 'column',
  },
  searchLocationNameView:{
    padding: 5,
  },
  searchLocationNameText: {
    fontSize: 20,
    fontFamily: 'Helvetica Neue',
  },
  searchLocationAddressView: {
    padding: 5,
  },
  searchLocationAddressText: {
    fontSize: 15,
    fontWeight: "200",
    fontFamily: 'Helvetica Neue',
  },
  noticeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noticeText: {
    fontSize: 30,
    fontWeight: "200",
    fontFamily: 'Helvetica Neue',
  },
  addLocationButtonView:{
    width: "100%",
    alignItems: 'center',
    backgroundColor: "#3C3C3D",
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  addLocationButtonText:{
    color: "white",
    fontSize: 20,
    fontFamily: 'Helvetica Neue',
  }
});

export default Map;