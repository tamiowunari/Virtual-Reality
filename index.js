import React from 'react';
import house from './data/houseData'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  asset
} from 'react-360';


export  class InfoPanel extends React.Component {
  state = {
    room: house.House.roomName,
    info: house.House.info,
    adjacentRooms: house.House.adjacentRooms
  }
  render() {
    return (
      <View style={styles.greetingBox}>
      <Text>
        Room Info
      </Text>
      <Text>
        {this.state.info}
      </Text>
    </View>   
    );
  }
};


export class Buttons extends React.Component {
    state = {
      room: house.House.roomName,
      info: house.House.info,
      adjacentRooms: house.House.adjacentRooms
    }
    clickHandler(roomSelection){
      this.setState({
        room: house[`${roomSelection}`].roomName,
        info: house[`${roomSelection}`].info,
        adjacentRooms: house[`${roomSelection}`].adjacentRooms
      })
      Environment.setBackgroundImage(asset(`./360_${house[`${roomSelection}`]}`))
    }
  createRoomButton(adjacentRooms){
    let rooms = adjacentRooms;
    let buttons = [];
    rooms.map((room, index) =>{
      buttons.push(<VrButton key={index} onClick={() => this.clickHandler(room)}>
        <Text style={{backgroundColor: 'green'}}>{room}</Text>
      </VrButton>)
    });
    return buttons;
  }
    render() {
      return (
        <View style={styles.greetingBox}>
            <Text>
              Room Selection
            </Text>
            <Text>
              {this.state.room}
            </Text>
            {this.createRoomButton(this.state.adjacentRooms)}
        </View>
      );
    }
  };

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255,255,255, 0.4)',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
});

AppRegistry.registerComponent('Buttons', () => Buttons);
AppRegistry.registerComponent('InfoPanel', () => InfoPanel);
