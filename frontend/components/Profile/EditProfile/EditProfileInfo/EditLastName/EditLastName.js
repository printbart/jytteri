import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

//redux
import { connect } from 'react-redux';
import {setProfileData} from '../../../Redux/Actions/profile';

const mapStateToProps = (state) => {
    return {
        profileData: state.data.profileData
    }
}

//redux set dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        set: (data) => dispatch(setProfileData(data))
    }
}


class EditLastName extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.setHeader();
    }

    componentDidMount(){
        this.setState({lastnameValue: this.props.profileData.lastname});
    }

    setHeader(){
        this.props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style = {styles.doneButtonView} onPress = {this.editLastName}>
                    <Text style = {styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
            )
        })
    }

    editLastName = () => {
        const info = {
            userID: this.props.profileData.userID,
            lastname: this.state.lastnameValue,
        };
        var request = new Request('http://localhost:5000/api/editLastname', {
            method: 'POST',
            headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
            body: JSON.stringify(info)
        });
        fetch(request).then((response) => {
            response.json().then((data) => {
                this.props.set(data[0]);
                this.props.navigation.goBack(null);
            });
        }).catch(function(err){
            console.log(err);
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
                            value = {this.state.lastnameValue}
                            onChangeText={(lastname) => this.setState({lastnameValue: lastname})}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditLastName);