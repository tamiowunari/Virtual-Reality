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

export default class InfoPanel extends React.Component {
  render() {
    return (
      <View style={styles.greetingBox}>
      <Text>
        Room Info
      </Text>
      <Text>
        {this.props.info}
      </Text>
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

AppRegistry.registerComponent('InfoPanel', () => InfoPanel);
