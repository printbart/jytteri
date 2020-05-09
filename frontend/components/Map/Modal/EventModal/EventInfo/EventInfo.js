import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';

//packages
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//image
import defaultProfilePicture from '../../../../../Images/defaultProfilePicture.png';


class EventInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    //set title when event modal is opened
    componentDidMount(){
        this.props.setTitle();
    }

    renderGuests = ({item}) => {
        return(
            <View style = {styles.infoView}>
                <View style = {styles.profilePictureView}>
                    <Image
                        source = {defaultProfilePicture}
                        style = {styles.profilePicture}/>
                </View>
                <View style = {styles.usernameView}>
                    <Text style = {styles.usernameText}>{item.username}</Text>
                </View>
            </View>
        )
    }

    render(){
        return(
            <View style ={styles.eventInfosView}>
                <View style = {styles.eventTitleView}>
                    <View style = {styles.eventHeaderView}>
                        <Text style = {styles.eventInfoText}>Title</Text>
                    </View>
                    <View style = {styles.eventTitleInputView}>
                        <TextInput
                        placeholder="enter title"
                        style={styles.input}
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        value = {this.props.title}
                        onChangeText={(title) => this.props.onChangeTitle(title)}
                        maxLength={32}/>
                        <TouchableOpacity style = {styles.clearButtonView} onPress = {this.props.clearTitle}>
                            <MaterialCommunityIcons name = "close-circle" size = {20} color = "lightgrey"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.usersView}>
                    <View style = {styles.hostView}>
                        <View style = {styles.headercenterView}>
                            <Text style = {styles.headerCenterText}>Host</Text>
                        </View>
                        <View style = {styles.infoView}>
                            <View style = {styles.profilePictureView}>
                                <Image
                                    source = {defaultProfilePicture}
                                    style = {styles.profilePicture}/>
                            </View>
                            <View style = {styles.usernameView}>
                                <Text style = {styles.usernameText}>{this.props.eventItem.hostName}</Text>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.guestsView}>
                        <View style = {styles.headercenterView}>
                            <Text style = {styles.headerCenterText}>Guest</Text>
                        </View>
                        {this.props.eventItem.guest ?
                        <FlatList
                            data = {this.props.eventItem.guests}
                            renderItem = {this.renderGuests}
                            keyExtractor = {(item)=>item.userID.toString()}/> :
                        <View style = {styles.noneMessageView}>
                            <Text style = {styles.noneMessage}>No one at the moment</Text>
                        </View>}
                    </View>
                </View>
                <TouchableOpacity style = {styles.leaveButtonView} onPress = {this.props.leaveEvent}>
                    <Text style = {styles.leaveButtonText}>LEAVE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    eventInfosView: {
        flex: 1,
    },
    eventTitleView: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "grey",
    },
    eventHeaderView: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    eventTitleInputView: {
        flexDirection: 'row',
        flex: 5,
    },
    eventInfoText: {
        fontSize: 15,
        fontWeight: "200",
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    },
    input: {
        flex: 1,
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    },
    clearButtonView: {
        justifyContent: 'flex-end',
        marginTop: 5,
        marginRight: 5,
    },
    usersView:{
        flex: 1,
    },
    hostView: {
        borderBottomWidth: 0.5,
        borderBottomColor: "lightgrey",
        padding: 10,
    },
    headercenterView: {
        padding: 5,
        alignItems: "center",
        justifyContent: 'center',
    },
    headerCenterText:{
        fontSize: 25,
    },
    infoView:{
       flexDirection: "row",
       padding: 10,
    },
    profilePictureView:{

    },
    profilePicture:{
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: "grey",
        width: 50,
        height: 50,
        backgroundColor: "white",
    },
    usernameView:{
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
    },
    usernameText: {
        fontSize: 20,
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    },
    noneMessageView:{
        padding: 10,
    },
    noneMessage:{
        fontSize: 20,
        fontFamily: 'Helvetica Neue',
        color: "lightgrey",
        textAlign: 'center',
    },
    guestsView: {
        borderBottomWidth: 0.5,
        borderBottomColor: "lightgrey",
        padding: 10,
    },
    leaveButtonView: {
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#3C3C3D",
        margin: 20,
    },
    leaveButtonText: {
        padding: 10,
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
        color: "white",

    }
});

export default EventInfo;