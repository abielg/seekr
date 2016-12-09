import Exponent from 'exponent';
import React from 'react';
import Toolbar from '../components/Toolbar';
import Router from '../navigation/Router';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  StackNavigation,
} from '@exponent/ex-navigation';

import 
  Spinner from 'react-native-spinkit';

export default class FindingScreen extends React.Component {

  constructor(time){
    super(time);
    this.state = {
      timePassed: false
    };
  } 

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.background}>  
            <Text style={styles.title}> Seeking a local who gets you... </Text>
            <Image source={require('../assets/loadinggif.png')} style ={{ width: 70, height: 70, bottom: 150, margin: 0 }}/>
            <TouchableOpacity style={styles.cancelButton} onPress={this._popScreen}>
              <Text style={{color: 'white'}}>X</Text>
            </TouchableOpacity>
            <Text style={styles.cancel}> Cancel </Text>
          </View> 

        </View>      
    );
  }

_popScreen = () => {
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  spinner: {
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title : {
    flex: 8,
    color: 'white',
    fontSize: 20,
    margin: 0,
    top: 100,
    fontFamily: 'Avenir'
  },

  cancel : {
    flex: 1,
    color: 'white',
    fontSize: 15,
    margin: 0,
    bottom: 20
  },

  background : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF8217',
    flex: 6,
  },

  cancelButton : {
    borderWidth: 1,
    borderColor: 'white',
    height:40,
    width: 40,
    borderRadius: 64,
    margin: 0,
    backgroundColor: '#FF8217',
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40,
    fontFamily: 'Avenir'

  },

  
  });

