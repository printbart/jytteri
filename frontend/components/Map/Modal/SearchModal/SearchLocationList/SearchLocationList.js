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
                <View style = {styles.searchLocationIconBackground}>
                    <Image source={{uri: item.icon}} style = {styles.searchLocationIconImage}/>
                </View>
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
        paddingRight: 50,
        paddingLeft: 5,
    },
    searchLocationIconView:{
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchLocationIconBackground:{
        backgroundColor: "#F9A908",
        padding: 5,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "flex-end",
        borderRadius: 50,
    },
    searchLocationIconImage:{
        width: 25,
        height: 25,
        marginRight: 5,
        tintColor:'white',
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
        paddingTop: 0,
    },
    searchLocationAddressText: {
        fontSize: 15,
        fontWeight: "200",
        fontFamily: 'Helvetica Neue',
    },
});

export default SearchLocationList;