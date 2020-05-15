import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//libraries
import FontistoIcon from 'react-native-vector-icons/Fontisto';

//redux
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        profileData: state.data.profileData
    }
}

class EditProfileInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <View style = {styles.editProfileInfoView}>
                <TouchableOpacity style = {[styles.nameInfoView, {borderTopWidth: 0.5}]} onPress = {this.props.navigateEditFirstName}>
                    <View style = {styles.nameTagView}>
                        <Text style = {styles.nameTagText}>Firstname</Text>
                    </View>
                    <View style = {styles.nameView}>
                        <View style = {styles.firstNameView}>
                            <Text style = {styles.nameText}>{this.props.profileData.firstname}</Text>
                        </View>
                    </View>
                    <View style = {styles.rightIconView}>
                        <FontistoIcon name="angle-right" size={20} color = "#F9A908"/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.nameInfoView} onPress = {this.props.navigateEditLastName}>
                    <View style = {styles.nameTagView}>
                        <Text style = {styles.nameTagText}>Lastname</Text>
                    </View>
                    <View style = {styles.nameView}>
                        <View style = {styles.firstNameView}>
                            <Text style = {styles.nameText}>{this.props.profileData.lastname}</Text>
                        </View>
                    </View>
                    <View style = {styles.rightIconView}>
                        <FontistoIcon name="angle-right" size={20} color = "#F9A908"/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    editProfileInfoView:{
        flex: 1,
    },
    nameInfoView: {
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderColor: "lightgrey",
        padding: 10,
    },
    nameTagView: {
        padding: 5,
    },
    nameTagText:{
        fontSize: 15,
        fontWeight: "500",
        fontFamily: 'Helvetica Neue',
    },
    nameView:{
        flexDirection: "row",
        padding: 5,
    },
    nameText:{
        fontSize: 15,
        paddingLeft: 20,
        fontWeight: "300",
        fontFamily: 'Helvetica Neue',
    },
    rightIconView:{
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
    }
});

export default  connect(mapStateToProps)(EditProfileInfo);