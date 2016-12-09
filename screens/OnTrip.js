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


constructor(props){
  super(props);
  this.state = {
    followsUserLocation: true,
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0
  }
}

_handler() {
  console.log("hi guys");
  /*this.setState({
    ...this.state,
    //followsUserLocation: false,
  });*/
}

render() {

    
    return (
      <View style={styles.container}>
        <View>
          <Toolbar navigator={this.props.navigator} left='<' title='On Adventure' />

        </View>
        
        <View style={{alignItems:'center'}}>
          <MapView  
            style={styles.map}
            showsUserLocation={true}
           //followsUserLocation={this.state.followsUserLocation}
            showsPointsofInterest={false}
            region={{latitude: 37.4275, longitude: -122.1697, latitudeDelta: .0050, longitudeDelta: .0050}}
            />  

        
      <Text style={{fontSize: 40, fontFamily: 'Avenir', top: 20, backgroundColor: 'rgba(0,0,0,0)'}}>Where to next?</Text>
      
      <View style={{margin: 10, width: 100}}/>
            <TextInput style={styles.textInput}/>

      <TouchableOpacity onPress={this.goTolocalFeed}>
        <Image
          source={require('../assets/nextstop1.png')}
          style={{height: 50, width: 94, zIndex:2, top: 80, left: 60}}
        />
      </TouchableOpacity>
      
      <Text style={{fontSize: 24, top: 260, fontFamily: 'Avenir', alignItems: 'center'}}>Suggested Next Stops</Text>
        
          <TouchableOpacity onPress={this._handler.bind(this)}>
            <Image source={require('../assets/squaresushi.png')} style ={{ width: 140, height: 135, borderRadius: 10, top: 265, left: -88, }}/> 
            <Text style={{top: 235, left: -65, color: 'white', fontFamily: 'Avenir', fontWeight: 'bold', fontSize: 22, backgroundColor: 'rgba(0,0,0,0)'}}>Sushirrito</Text>
            
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/offthegrid.png')} style ={{ width: 140, height: 135, borderRadius: 10, top: 100, left: 80}}/> 
            <Text style={{top: 70, left: 88, color: 'white', fontFamily: 'Avenir', fontWeight: 'bold', fontSize: 22, backgroundColor: 'rgba(0,0,0,0)'}}>Off the Grid</Text>
          </TouchableOpacity>
        </View>

        <View>

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
    borderWidth: 1,
    borderColor: 'white',
    height:25,
    width: 25,
    borderRadius: 64,
    margin: 0,
    backgroundColor: '#FF8217',
    bottom: -300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label : {
    fontSize: 16,
    marginBottom: 20,
    top: 10,
    marginRight: 10,
    fontFamily: 'Avenir',
  },
  textInput : {
    height: 30, 
    backgroundColor: '#F3F3F3',
    flex: 1,
  },

});

