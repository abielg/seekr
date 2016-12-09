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
            <TouchableOpacity 
              style={styles.button} onPress={this.props.action}>
              <Text style={styles.buttonTitle}>{this.props.title}</Text>
              {this.props.image}
            </TouchableOpacity>
          </View>
        );
    }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 200,
    backgroundColor: '#FF8217',
    borderRadius: 4,
    flexDirection: 'row',
  },

  buttonTitle: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 20,
  },
});