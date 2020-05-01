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
                        myMarker = {this.props.myMarker}
                        storeLocation = {this.props.storeLocation}/> :
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#3C3C3D",
        shadowRadius: 7.5,
        shadowOpacity: 0.3,

      },
});

export default Menu;