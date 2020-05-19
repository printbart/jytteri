import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class MenuHomeTab extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    setTab(input){
        this.props.setTab(input);
    }

    render(){
        return(
            <View style = {styles.menuHomeTabView}>
                <TouchableOpacity
                style = {this.props.getTab === 0 ? styles.titleViewOn : styles.titleViewOff}
                onPress = {this.setTab.bind(this, 0)}>
                    <Text style = {styles.titleText}>Host</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {this.props.getTab === 1 ? styles.titleViewOn : styles.titleViewOff}
                    onPress = {this.setTab.bind(this, 1)}>
                    <Text style = {styles.titleText}>Guest</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    menuHomeTabView:{
        flexDirection: "row",
        justifyContent: "center",
    },
    titleViewOn: {
        flex: 1,
        margin: 5,
        padding: 5,
        backgroundColor: "#F9A908",
        borderRadius: 10,
    },
    titleViewOff: {
        flex: 1,
        margin: 5,
        padding: 5,
        backgroundColor: "#FAD68E",
        borderRadius: 10,
    },
    titleText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "500",
        fontFamily: 'Helvetica Neue',
        color: "white",
    },
});

export default MenuHomeTab;