import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Modal, TouchableOpacity, Platform, Alert } from 'react-native';

//libaries
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';


class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchModalVisible: false
    }
  }

  componentDidMount(){
    this.requestLocationPermission();
  }

  onPressSearchModal(input){
    console.log(input);
    this.setState({searchModalVisible: input});
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

  render(){
    return(
      <View style = {styles.mapContainer}>
        <Modal 
        visible={this.state.searchModalVisible}
        animationType="slide">
          <View style={styles.modalView}>
            <View style = {styles.modalTopView}>
              <View style = {styles.cancelView}>
                <Text style = {styles.cancelText} 
                onPress={this.onPressSearchModal.bind(this, false)}>
                  X
                </Text>
              </View>
              <View style = {styles.searchTextInputView}>
                <TextInput style = {styles.searchTextInput} placeholder="Where?"/>
              </View>
            </View>
          </View>
        </Modal>
  
        <MapView 
        style = {styles.mapView}
        showsUserLocation={true}
        provider = {PROVIDER_GOOGLE}
        initialRegion = {this.state.initialPosition}/>

        <View style={styles.bottomModalView}>
          <TouchableOpacity style = {styles.bottomHeaderView} onPress={this.onPressSearchModal.bind(this, true)}>
            <Text style = {styles.bottomHeaderText}>Where?</Text>
          </TouchableOpacity>
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
    padding: 10,
    backgroundColor: "white",
  },
  bottomHeaderView: {
    height: 50,
    borderRadius: 50,
    backgroundColor: "#f5f5f5",
    justifyContent: 'center',
  },
  bottomHeaderText:{
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: "200",
    color: "#3C3C3D",
  }
});

export default Map;