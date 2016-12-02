import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Button extends React.Component{
    render() {
        return (
          <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonTitle}>{this.props.title}</Text>
            </TouchableOpacity>
          </View>
        );
    }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 144,
    backgroundColor: '#FF8217',
    borderRadius: 4,
  },

  buttonTitle: {
    color: 'white',
  },
});