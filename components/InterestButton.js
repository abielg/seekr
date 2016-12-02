import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export default class InterestButton extends React.Component{
    constructor(props) {
      super(props);
      this.state = { pressStatus: false };
    }

    _changeButtonColor(){
      this.setState({ pressStatus: !this.state.pressStatus });
    }
    render() {
      return (
        <View style={styles.container}>
          <TouchableHighlight
            onPress={this._changeButtonColor.bind(this)}
            activeOpacity={1}
            style={ this.state.pressStatus ? styles.pressedButtonStyle : styles.unpressedButtonStyle }
          >
            <Text style={this.state.pressStatus ? styles.pressedButtonTitle : styles.unpressedButtonTitle}>{this.props.title}</Text>
          </TouchableHighlight>
        </View>
      );
    }

}

var styles = StyleSheet.create({
  unpressedButtonStyle : {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
    backgroundColor: 'white',
    borderColor: '#FF8217',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
    left: -10
  },
  pressedButtonStyle : {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
    backgroundColor: '#FF8217',
    borderColor: '#FF8217',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
    left: -10

  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  unpressedButtonTitle: {
    color: '#FF8217',
  },

  pressedButtonTitle: {
    color: 'white',
  }
});