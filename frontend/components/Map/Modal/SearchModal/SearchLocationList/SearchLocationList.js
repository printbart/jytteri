import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

class SearchLocationList extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    onPressLocation(item){
        this.props.searchLocation(item);
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
            <FlatList
                data = {this.props.serchLocationData}
                renderItem = {this.renderSearchLocation}
                keyExtractor = {(item)=>item.id}/>
        )
    }
}
const styles = StyleSheet.create({
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
});

export default SearchLocationList;