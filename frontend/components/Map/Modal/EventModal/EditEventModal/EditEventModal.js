import React, { Component } from 'react';
import { StyleSheet, View, Modal, Keyboard } from 'react-native';

//component
import EditEventHeader from './EditEventHeader/EditEventHeader';
import EditEventTitle from './EditEventTitle/EditEventTitle';
import EditEventDate from './EditEventDate/EditEventDate';
import EventHost from '../EventHost/EventHost';
import EditEventGuest from './EditEventGuest/EditEventGuest';

import DateKeyboard from '../../HostEventModal/EventDate/DateKeyboard/DateKeyboard';

class EditEventModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.currentEventItem.eventName,
            startDateKeyboardOpen: false,
            endDateKeyboardOpen: false,
            startDate: this.props.currentEventItem.startDate,
            endDate: this.props.currentEventItem.endDate,
        }
    }

    //clear title input
    clearTitle = () => {
        this.setState({title: ""});
    }

    //save event
    saveEditEvent = async () => {
        this.props.editEventModalToggle(); //close event modal
        let changedEventItem = JSON.parse(JSON.stringify(this.props.currentEventItem)); //make event data mutable
        changedEventItem.eventName = this.state.title; //set changed title
        changedEventItem.startDate = new Date(this.state.startDate).getTime(); //set changed startDate
        changedEventItem.endDate = new Date(this.state.endDate).getTime();  //set changed endDate
        this.props.editEventInfo(changedEventItem);
    }

    //toggle start date keyboard
    toggleStartDateKeyboard = () => {
        Keyboard.dismiss()
        this.setState({startDateKeyboardOpen: !this.state.startDateKeyboardOpen,endDateKeyboardOpen: false });
    }

    //toggle date keyboard
    toggleEndDateKeyboard = () => {
        Keyboard.dismiss()
        this.setState({endDateKeyboardOpen: !this.state.endDateKeyboardOpen, startDateKeyboardOpen: false });
    }

    //hide both keyboards
    hideDateKeyboard = () => {
        this.setState({startDateKeyboardOpen: false, endDateKeyboardOpen: false});
    }

    //set start date
    setStartDate = (newDate) => {
        this.setState({ startDate: newDate });
    }

    //set end date
    setEndDate = (newDate) => {
        this.setState({ endDate: newDate });
    }

    render(){
        return(
            <Modal
            visible={this.props.editEventModalVisible}
            animationType="none">
                <View style = {styles.editEventModalView}>
                    <EditEventHeader
                        saveEditEvent = {this.saveEditEvent}
                        cancelEditEvent = {this.props.editEventModalToggle}/>
                    <EditEventTitle
                        title = {this.state.title}
                        onChangeTitle={(title) => this.setState({title: title})}
                        clearTitle = {this.clearTitle}
                        hideDateKeyboard = {this.hideDateKeyboard}
                        toggleDateKeyboard = {this.toggleStartDateKeyboard}/>
                    <EditEventDate
                        id = {0}
                        title = "Start time"
                        chosenDate = {this.state.startDate}
                        toggleDateKeyboard = {this.toggleStartDateKeyboard}
                        setDate = {this.setStartDate}/>
                    <EditEventDate
                        id = {1}
                        title = "End time"
                        chosenDate = {this.state.endDate}
                        toggleDateKeyboard = {this.toggleEndDateKeyboard}
                        setDate = {this.setEndDate}/>
                    <EventHost
                        hostName = {this.props.currentEventItem.hostName}/>
                    <EditEventGuest
                        guests = {this.props.currentEventItem.guests}/>
                </View>
                {this.state.startDateKeyboardOpen &&
                <DateKeyboard
                    chosenDate = {this.state.startDate}
                    setDate = {this.setStartDate}
                    toggleNextKeyboard = {this.toggleEndDateKeyboard}/>}
                {this.state.endDateKeyboardOpen &&
                <DateKeyboard
                    chosenDate = {this.state.endDate}
                    setDate = {this.setEndDate}
                    toggleNextKeyboard = {this.toggleEndDateKeyboard}/>}
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    editEventModalView:{
        flex: 1,
    },
});

export default EditEventModal;