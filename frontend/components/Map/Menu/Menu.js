import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import OpenModalButton from './OpenModalButton/OpenModalButton';

//components
import MenuContent from './MenuContent/MenuContent';
import MenuNotice from './MenuContent/MenuNotice';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    //open search modal
    openModal = () => {
        this.props.toggleModal(true);
    }

    render(){
        return(
            <View style={styles.bottomModalView}>
                <OpenModalButton 
                    openModal = {this.openModal}/>
                {this.props.myMarker ?
                    <MenuContent 
                        myMarker = {this.props.myMarker}/> :
                    <MenuNotice />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomModalView:{
        height: "30%",
        padding: 10,
        backgroundColor: "white",
        borderRadius: 20,
      },
});

export default Menu;