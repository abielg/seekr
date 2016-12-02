import Exponent from 'exponent';
import React from 'react';
import Toolbar from '../components/Toolbar';
import Button from '../components/Button';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar navigator={this.props.navigator} left='<' title='Add Payment Info' />
        <View style={styles.flexwrapper}>
          <View style={{flex:1}}/>
          <View style={styles.mainwrapper}>
            <View style={{margin: 15}}/>
            <Text style={styles.label}>Credit Card Number:</Text>
            <TextInput style={styles.textInput}/>
            <View style={{margin: 15}}/>
            <View style={styles.labelFieldWrapper}>
              <Text style={styles.label}>Expiration Date:</Text>
              <TextInput style={styles.textInput}/>
            </View>
            <View style={{margin: 15}}/>
            <View style={styles.labelFieldWrapper}>
              <Text style={styles.label}>CW:</Text>
              <TextInput style={styles.cwTextInput}/>
            </View>
          </View>
          <View style={{flex:1}}/>
        </View>
        <View style={styles.bottomButton}>
          <Button title='Done'>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  flexwrapper : {
    flexDirection: 'row',
  },

  mainwrapper : {
    flex: 8,
    justifyContent: 'flex-start'
  },

  label : {
    fontSize: 16,
    marginBottom: 20,
    top: 10,
    marginRight: 10
  },

  labelFieldWrapper : {
    flexDirection: 'row',
  },

  textInput : {
    height: 30, 
    backgroundColor: '#F3F3F3',
    flex: 1,
  },

  cwTextInput : {
    height: 30, 
    backgroundColor: '#F3F3F3',
    width: 60,
  },

  bottomButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },

});
