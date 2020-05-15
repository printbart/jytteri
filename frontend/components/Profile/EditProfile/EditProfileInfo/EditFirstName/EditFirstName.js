import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

class EditFirstName extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.setHeader();
    }

    setHeader(){
        this.props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style = {styles.doneButtonView}>
                    <Text style = {styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
            )
        });
    }

    render(){
        return(
            <View style = {styles.editProfileNameView}>
                <View style = {styles.nameView}>
                    <View style = {styles.nameTagView}>
                        <Text style = {styles.nameTagText}>Name</Text>
                    </View>
                    <View style = {styles.nameInput}>
                        <TextInput
                            placeholder="Name"
                            style={styles.nameInputs}
                            onChangeText={(username) => this.setState({usernameValue: username})}
                            maxLength={16}
                            autoCorrect={false}
                            />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    doneButtonView:{
        padding: 5,
    },
    doneButtonText:{
        fontSize: 15,
        fontWeight: "500",
        fontFamily: 'Helvetica Neue',
        color: "white",
    },
    editProfileNameView:{
        flex: 1,
        backgroundColor: "white",
    },
    nameView:{
        flexDirection: "row",
    },
    nameTagText:{
        fontSize: 15,
        fontWeight: "400",
        fontFamily: 'Helvetica Neue',
        padding: 10,
    },
    nameInput: {
        flex: 1,
        justifyContent: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "lightgrey",
    }
});

export default EditFirstName;