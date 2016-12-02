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
             style = {styles.input}
             placeholder = {this.props.placeholder}
             autoCapitalize = 'none'
          />
      </View>
    );
  }


}

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 20,
  },
  input: {
     padding: 5,
     //height: 40,
     backgroundColor: '#F3F3F3',
     //borderColor: 'grey',
     flex: 1.5,
     //borderWidth: 1
  },
});