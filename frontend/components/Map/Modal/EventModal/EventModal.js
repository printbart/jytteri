import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';

//components
import CloseModalButton from '../ModalComponents/CloseModalButton/CloseModalButton';
import EventInfo from './EventInfo/EventInfo';

class EventModal extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    //set title of the event
    setTitle = () => {
        this.setState({title: this.props.currentEventItem.eventName});
    }

    //clear title input
    clearTitle = () => {
        this.setState({title: ""});
    }

    //close search modal
    closeEventModal = () => {
        this.props.toggleEventModal(false);
    }

    //save event
    saveEvent = () => {
        this.closeEventModal(); //close event modal
        const changedEventItem = JSON.parse(JSON.stringify(this.props.currentEventItem)); //make event data mutable
        changedEventItem.eventName = this.state.title; //set changed title
        this.props.editEventInfo(changedEventItem)
    }

    render(){
        return(
            <Modal
            visible={this.props.eventModalState}
            animationType="slide">
                <View style = {styles.eventModalView}>
                    <View style = {styles.eventModalHeaderView}>
                        <View style = {{flex: 1,}}>
                            <CloseModalButton 
                                closeModal={this.closeEventModal}/>
                        </View>
                        <View style = {styles.eventTitleView}>
                            <Text style = {styles.eventTitleText}>Event</Text>
                        </View>
                        <TouchableOpacity style = {styles.eventSaveView} onPress = {this.saveEvent}>
                            <Text style = {styles.eventSaveText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    <EventInfo
                        title = {this.state.title}
                        eventItem = {this.props.currentEventItem}
                        onChangeTitle={(title) => this.setState({title: title})}
                        setTitle = {this.setTitle}
                        clearTitle = {this.clearTitle}
                        />
                </View>
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
        backgroundColor: "#3C3C3D",
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
        color: "grey",
    }
});

export default EventModal;