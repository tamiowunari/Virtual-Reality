import React from 'react';
import house from '../data/houseData'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  asset
} from 'react-360';

export default class Buttons extends React.Component {
//   state = {
//     room: house.House.roomName,
//     info: house.House.info,
//     adjacentRooms: house.House.adjacentRooms
//   }
// createRoomButton(adjacentRooms){
//   let rooms = adjacentRooms;
//   let buttons = [];
//   rooms.map((room, index) =>{
//     buttons.push(<VrButton key={index} onClick={() => this.clickHandler(room)}>
//       <Text style={{backgroundColor: 'green'}}>{room}</Text>
//     </VrButton>)
//   });
//   return buttons;
// }
  render() {
    return (
      <View style={styles.greetingBox}>
          <Text>
            Room Selection
          </Text>
          <Text>
            {this.props.room}
          </Text>
          {this.props.createRoomButton(this.props.adjacentRooms)}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
});

AppRegistry.registerComponent('Buttons', () => Buttons);
