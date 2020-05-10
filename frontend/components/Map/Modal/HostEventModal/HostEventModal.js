import React, { Component } from 'react';
import { StyleSheet, View, Modal, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';


//components
import EventHeader from './EventHeader/EventHeader';
import EventTitle from './EventTitle/EventTitle';
import EventDate from './EventDate/EventDate';

//component
import DateKeyboard from './EventDate/DateKeyboard/DateKeyboard';

const DismissKeyboard =({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class HostEventModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            dateKeyboardOpen: false,
            chosenStartDate: new Date(),
            chosenEndDate: new Date(),
        }
    }

    //close search modal
    closeEventModal = () => {
        this.props.toggleHostEventModal(false);
    }

    //set title on change keyboard
    setTitle = (title) => {
        this.setState({title});
    }

    //clear title
    clearTitle = () => {
        this.setState({title: ""});
    }

    //set start date
    setStartDate = (newDate) => {
        this.setState({ chosenStartDate: newDate })
    }

    //set end date
    setEndDate = (newDate) => {
        this.setState({ chosenEndDate: newDate })
    }

    //toggle start date keyboard
    toggleStartDateKeyboard = () => {
        Keyboard.dismiss()
        this.setState({startDateKeyboardOpen: !this.state.startDateKeyboardOpen,endDateKeyboardOpen: false })
    }

    //toggle date keyboard
    toggleEndDateKeyboard = () => {
        Keyboard.dismiss()
        this.setState({endDateKeyboardOpen: !this.state.endDateKeyboardOpen, startDateKeyboardOpen: false })
    }

    //hide both keyboards
    hideDateKeyboard = () => {
        this.setState({startDateKeyboardOpen: false, endDateKeyboardOpen: false});
    }

    //save event
    saveEvent = () =>{
        this.closeEventModal();
        this.props.saveEventInfo(this.state.title, this.state.chosenStartDate.getTime(), this.state.chosenEndDate.getTime());
    }

    render(){
        return(
            <Modal
            visible = {this.props.visible}
            animationType = "slide">
                <DismissKeyboard>
                <View style = {styles.hostEventModalView}>
                    <EventHeader
                    closeEventModal = {this.closeEventModal}
                    saveEvent = {this.saveEvent}/>
                    <EventTitle
                    title = {this.state.title}
                    setTitle = {this.setTitle}
                    clearTitle = {this.clearTitle}
                    hideDateKeyboard = {this.hideDateKeyboard}/>
                    <EventDate
                        title = "Start time"
                        chosenDate = {this.state.chosenStartDate}
                        dateKeyboardOpen = {this.state.startDateKeyboardOpen}
                        toggleDateKeyboard = {this.toggleStartDateKeyboard}
                        setDate = {this.setStartDate}/>
                    <EventDate
                        title = "End time"
                        chosenDate = {this.state.chosenEndDate}
                        dateKeyboardOpen = {this.state.endDateKeyboardOpen}
                        toggleDateKeyboard = {this.toggleEndDateKeyboard}
                        setDate = {this.setEndDate}/>
                </View>
                </DismissKeyboard>
                {this.state.startDateKeyboardOpen &&
                <DateKeyboard
                    chosenDate = {this.state.chosenStartDate}
                    setDate = {this.setStartDate}
                    toggleDateKeyboard = {this.toggleStartDateKeyboard}/>}
                {this.state.endDateKeyboardOpen &&
                <DateKeyboard
                    chosenDate = {this.state.chosenEndDate}
                    setDate = {this.setEndDate}
                    toggleDateKeyboard = {this.toggleEndDateKeyboard}/>}
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    hostEventModalView:{
        flex: 1,
    },
});

export default HostEventModal;