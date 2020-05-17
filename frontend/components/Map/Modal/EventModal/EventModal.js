import React, { Component } from 'react';
import { StyleSheet, View, Modal, Alert } from 'react-native';

//packages
import AsyncStorage from '@react-native-community/async-storage';

//components
import EventHeader from './EventHeader/EventHeader';
import EventTitle from './EventTitle/EventTitle';
import EventDate from './EventDate/EventDate';
import EventHost from './EventHost/EventHost';
import EventGuest from './EventGuest/EventGuest';
import LeaveButton from './LeaveButton/LeaveButton';

//modal
import EditEventModal from './EditEventModal/EditEventModal';
import UserProfileModal from '../UserProfileModal/UserProfileModal';

class EventModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            editEventModalVisible: false,
            userProfileModalVisible: false,
        }
    }

    //close search modal
    closeEventModal = () => {
        this.props.toggleEventModal(false);
    }

    //leave event
    leaveEventType = async () => {
        if(this.props.currentEventItem.hostID !== Number(await AsyncStorage.getItem('userID'))){ //if user is a guest
            await this.props.leaveEvent(this.props.currentEventItem); //leave event
        }
        else{ //if user is a host
            //confirmation warning
            Alert.alert("Confirm delete event?","Your event data will get deleted",
                [{
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "OK", onPress: () => this.deleteEvent() }] //user agreed to delete
            );
        }
    }

    //delete event and all its data
    async deleteEvent (){
        await this.props.deleteEvent(this.props.currentEventItem); //delete event
        await this.closeEventModal(); //close event modal
    }

    //toggle edit event modal visible
    editEventModalToggle = () => {
        this.setState({editEventModalVisible: !this.state.editEventModalVisible})
    }

    //toggle user profile modal visible
    userProfileModalToggle = (data) => {
        this.setState({userProfileModalVisible: !this.state.userProfileModalVisible, userProfileModalData: data});
    }

    //get search user information
    getUserInfo = (userID) => {
        const info = {
            userID: userID
        };
        var request = new Request('http://localhost:5000/api/getUserInfo', {
            method: 'POST',
            headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
            body: JSON.stringify(info)
        });
        fetch(request).then((response) => {
            response.json().then((data) => {
                this.userProfileModalToggle(data);
            });
        }).catch(function(err){
            console.log(err);
        });
    }

    render(){
        return(
            <Modal
            visible={this.props.eventModalState}
            animationType="slide">
                {this.props.currentEventItem &&
                <View style = {styles.eventModalView}>
                    <EditEventModal //edit event modal
                        editEventModalVisible = {this.state.editEventModalVisible} //toggle editmodal state
                        editEventModalToggle = {this.editEventModalToggle} // toggle editmodal
                        editEventInfo = {this.props.editEventInfo} //edit data globally
                        currentEventItem = {this.props.currentEventItem} //get current event item
                        editEvent = {this.editEvent} //edit data on modal data
                        />
                    <UserProfileModal
                        userProfileModalVisible = {this.state.userProfileModalVisible}
                        userProfileModalToggle = {this.userProfileModalToggle}
                        userProfileModalData = {this.state.userProfileModalData}/>
                    <EventHeader 
                        editEventToggle = {this.editEventModalToggle}
                        closeEventModal = {this.closeEventModal}/>
                    <EventTitle
                        title = {this.props.currentEventItem.eventName}/>
                    <EventDate
                        title = "Start time"
                        chosenDate = {this.props.currentEventItem.startDate}/>
                    <EventDate
                        title = "End time"
                        chosenDate = {this.props.currentEventItem.endDate}/>
                    <EventHost
                        hostID = {this.props.currentEventItem.hostID}
                        hostName = {this.props.currentEventItem.hostName}
                        navigateToUser = {this.getUserInfo}/>
                    <EventGuest
                        guests = {this.props.currentEventItem.guests}
                        navigateToUser = {this.getUserInfo}/>
                    <LeaveButton
                        leaveEvent = {this.leaveEventType}/>
                </View>}
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    eventModalView:{
        flex: 1,
    },
    eventModalHeaderView: {
        padding: 10,
        paddingTop: 50,
        flexDirection: 'row',
        backgroundColor: "#F9A908",
    },
    eventTitleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    eventTitleText: {
        fontSize: 20,
        fontWeight: "500",
        fontFamily: 'Helvetica Neue',
        color: "white",
    },
    eventSaveView: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    eventSaveText: {
        fontSize: 15,
        color: "white",
    }
});

export default EventModal;