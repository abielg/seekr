import Exponent from 'exponent';
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class TextLabelInput extends React.Component {
  render() {
    return (
      <View style={styles.inputGroup}>
          <Text style={styles.label}>{this.props.label}</Text>
          <TextInput
             style = {this.inputStyle(this.props.height)}
             placeholder = {this.props.placeholder}
             autoCapitalize = 'none'
          />
      </View>
    );
  }

  inputStyle = (heightSpek) => {
    return {
      backgroundColor: '#F3F3F3',
      height: heightSpek,
      flex: 1,
      fontSize: 16,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }

}

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Avenir',
    marginRight: 15,
  },
});