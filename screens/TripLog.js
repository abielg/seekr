import React, { Component } from 'react';
import Exponent from 'exponent';
import Router from '../navigation/Router';
import Toolbar from '../components/Toolbar';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  NSLocationWhenInUseUsageDescription
} from 'react-native';
import MapView from 'react-native-maps';
import {
  StackNavigation,
} from '@exponent/ex-navigation';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

 

export default class roads extends React.Component {




render() {

    
    return (
      <View style={styles.container}>
        <View>
          <Toolbar navigator={this.props.navigator} left='<' title='Adventure Log' />
          <TouchableOpacity onPress={this._goToTripSummary}>
            <Image 
              source={require('../assets/trip1.png')}
              style ={{ margin: 0, flex: 1, justifyContent: 'center', left: 25, top: 10, fontFamily: 'Avenir'}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._goToTripSummary}>
           <Image 
              source={require('../assets/trip2.png')}
              style ={{ margin: 0, flex: 1, justifyContent: 'center', left: 25, top: 40, fontFamily: 'Avenir'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _goToTripSummary = () => {
    this.props.navigator.push(Router.getRoute('tripSummaryScreen'));
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },


  });