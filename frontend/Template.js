import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Template extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <View style = {styles.templateView}>
                <Text style = {styles.templateText}>Auth Main</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    templateView:{
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    templateText:{
        fontSize: 50,
    }
});

export default Template;