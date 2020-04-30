import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

//packages
import _ from "lodash";

//api key
import {googleMapSearchApiKey} from "../../../../apiKey";

class SearchLocationInput extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.onChangeDestinationDebounced = _.debounce(this.onChangeDestination, 1000);
    }

    //get information about all the searched location
    async onChangeDestination(destination){
        const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?input=${destination}&location=${this.props.myCurrentPosition.latitude},${this.props.myCurrentPosition.longitude}&radius=2000&key=${googleMapSearchApiKey}`;
        try{
            const result = await fetch(apiUrl);
            const json = await result.json();
            this.props.setSearchLocationData(json.results);
        }
        catch (err) {
            console.log(err);
        }
    }

    render(){
        return(
            <View style = {styles.searchTextInputView}>
                <TextInput
                    style = {styles.searchTextInput}
                    placeholder="Where?"
                    onChangeText={destination => this.onChangeDestinationDebounced(destination)}/>
          </View>
        )
    }
}
const styles = StyleSheet.create({
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
});

export default SearchLocationInput;