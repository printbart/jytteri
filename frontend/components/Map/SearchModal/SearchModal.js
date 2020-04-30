import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Modal } from 'react-native';

//components
import CloseModalButton from './CloseModalButton/CloseModalButton';
import SearchLocationInput from './SearchLocationInput/SearchLocationInput';
import SearchLocationList from './SearchLocationList/SearchLocationList';

class SearchModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchLocationData: [],
    }
  }

  //close search modal
  closeModal = () => {
    this.props.toggleModal(false);
    this.setSearchLocationData([]);
  }

  //load all the data that is related to your search
  setSearchLocationData = (data) => {
    this.setState({searchLocationData: data});
  }

  //zoom in to the location you clicked
  searchLocation = (item) => {
    this.props.toggleModal(false); //close search modal
    this.props.searchLocation(item); //zoom in
  }

  render(){
    return(
      <Modal
        visible={this.props.modalState}
        animationType="slide">
        <View style={styles.modalView}>
          <View style = {styles.modalTopView}>
            <CloseModalButton 
              closeModal={this.closeModal}/>
            <SearchLocationInput
              myCurrentPosition = {this.props.myCurrentPosition}
              setSearchLocationData = {this.setSearchLocationData} />
          </View>
          <SearchLocationList
            serchLocationData = {this.state.searchLocationData}
            searchLocation = {this.searchLocation}/>
        </View>
      </Modal>
    )
  }
}
const styles = StyleSheet.create({
    modalView:{
        flex: 1,
        paddingTop: 30,
      },
      modalTopView:{
        margin: 10,
        height: 50,
        flexDirection: 'row',
      },
      cancelText:{
        fontSize: 20,
        fontWeight: "200",
        padding: 5,
      },
});

export default SearchModal;