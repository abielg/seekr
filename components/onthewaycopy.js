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
  NSLocationWhenInUseUsageDescription
} from 'react-native';
import MapView from 'react-native-maps';
import {
  StackNavigation,
} from '@exponent/ex-navigation';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import DropDown, {
  Select,
  Option,
  OptionList,
} from 'react-native-selectme';
 

export default class roads extends React.Component {






render() {
    
    return (
        <View style={styles.container}>
        <Toolbar navigator={this.props.navigator} left='<' title='Seekr' />
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
          showsPointsofInterest={false}
          region={{latitude: 37.4275, longitude: -122.1697, latitudeDelta: .0050, longitudeDelta: .0050}}
          />  
        <Image
          source={require('../assets/eesha.png')}
          style={{height: 85, width: 132}}
        /> 
        <Text style={{fontSize: 20, top: 240, alignItems: 'center'}}>Eesha is on her way!</Text>
        <Text style={{fontSize: 12, top: 250, alignItems: 'center'}}>Destination TBD upon arrival</Text>
        <Text style={{fontSize: 20, top: 260, alignItems: 'center', color: 'orange'}}>3 minutes</Text>
        <TouchableOpacity style={styles.cancelButton} onPress={this._goToMainMap}>
            <Text style={{color: 'white'}}>X</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 12, bottom: -310, color: 'orange'}}> Cancel </Text>
        <TouchableOpacity>
          <Image source={require('../assets/phone1.png')} style ={{ width: 45, height: 60, top: 200, left: -110, zIndex: 2}}/> 
          <Text style={{top: 210, left: -95}}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/message1.png')} style ={{ width: 60, height: 60, top: 125, left: 110, zIndex: 2}}/> 
          <Text style={{top: 130, left: 110}}>Message</Text>
        </TouchableOpacity>

      </View>


    );
  }

_goToMainMap = () => {
    this.props.navigator.push(Router.getRoute('MainMap'));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

 map: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 360,
    width: 400
  },
  cancelButton : {
    borderWidth: 1,
    borderColor: 'white',
    height:25,
    width: 25,
    borderRadius: 64,
    margin: 0,
    backgroundColor: '#FF8217',
    flex: 0,
    bottom: -300,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

