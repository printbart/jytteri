import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class MenuContent extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    //save location into database
    onPressSetLocation(){
        var location = {
            latitude: this.props.myMarker.latitude,
            longitude: this.props.myMarker.longitude,
        }
        var request = new Request('http://localhost:5000/api/location', {
            method: 'POST',
            headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
            body: JSON.stringify(location)
        });
        fetch(request).then((response) => {
            response.json().then((data) => {
                this.setState({data: data.value})
            });
        }).catch(function(err){
            console.log(err);
        });
    }

    render(){
        return(
            <View style = {styles.bottomView}>
                <TouchableOpacity style = {styles.addLocationButtonView} onPress = {this.onPressSetLocation.bind(this)}>
                    <Text style = {styles.addLocationButtonText}>Host Event Here</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bottomView:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
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
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
    }
});

export default MenuContent;