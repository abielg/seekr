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
  NSLocationWhenInUseUsageDescription,
  AsyncStorage,
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

  constructor(props) {
    super(props);
    this.state = {};
    this._loadInitialState();
    //this.state = { statusIsLocal: this.props.statusIsLocal};
  }

  _loadInitialState = async () => {
    try {
      var value = await AsyncStorage.getItem('isStateLocal');
      if (value !== null){
        this.setState({ statusIsLocal: value==='true'});
      } else {
        this.setState({ statusIsLocal: false});
      }
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  };

componentDidMount () {
    setTimeout(() => {
    this.props.navigator.push(Router.getRoute('OnTrip'));
    }, 2500);
  }

render() {
    
    return (
      <View style={styles.container}>
        <View>
          <Toolbar navigator={this.props.navigator} left='Hamburger' title='Seekr' />
        </View>
        <View style={{alignItems:'center'}}>
          <MapView
            style={styles.map}
            showsUserLocation={true}
            followsUserLocation={true}
            showsPointsofInterest={false}
            region={{latitude: 37.4275, longitude: -122.1697, latitudeDelta: .0050, longitudeDelta: .0050}}
            />

          {
            this.state.statusIsLocal?
            (<Image source={require('../assets/paul.jpg')} style={{height: 40, width: 40, borderRadius: 20, top:60}} />)
            :
            (<Image source={require('../assets/eesha.png')} style={{height: 85, width: 132, top: 60}} />)
          }
          <Text style={{fontSize: 20, top: 340, alignItems: 'center', fontFamily: 'Avenir'}}>{this.state.statusIsLocal?'Going to pick up Paul!' : 'Eesha is on her way!'}</Text>
          <Text style={{fontSize: 12, top: 350, alignItems: 'center', fontFamily: 'Avenir'}}>Destination TBD upon arrival</Text>
          <Text style={{fontSize: 20, top: 360, alignItems: 'center', color: 'orange', fontFamily: 'Avenir'}}>3 minutes</Text>
          <TouchableOpacity style={styles.cancelButton} onPress={this._goToMainMap}>
              <Text style={{color: 'white'}}>X</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 12, bottom: -375, color: 'orange', fontFamily: 'Avenir'}}> Cancel </Text>
          <TouchableOpacity>
            <Image source={require('../assets/phone1.png')} style ={{ width: 45, height: 60, top: 300, left: -110, zIndex: 2}}/> 
            <Text style={{top: 305, left: -95, fontFamily: 'Avenir'}}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/message1.png')} style ={{ width: 60, height: 60, top: 225, left: 110, zIndex: 2}}/> 
            <Text style={{top: 225, left: 110, fontFamily: 'Avenir'}}>Message</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#F5FCFF',
  },

 map: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 400,
    width: 400
  },
  cancelButton : {
    height:40,
    width: 40,
    borderRadius: 80,
    backgroundColor: '#FF8217',
    bottom: -370,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

