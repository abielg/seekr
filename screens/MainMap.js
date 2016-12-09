import React, { Component } from 'react';
import Exponent from 'exponent';
import Router from '../navigation/Router';


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


constructor(props) {
    super(props);
 
    this.state = {
      canada: ''
    };
  }
 
  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }
 
  
  _people(number) {
 
  this.setState({
      ...this.state,
      people: number
    });
  }



render() {
    
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
          showsPointsofInterest={true}
          region={{latitude: 37.4275, longitude: -122.1697, latitudeDelta: .0050, longitudeDelta: .0050}}
          />  
      <TouchableOpacity onPress={this.goToSignup}>
        <Image
          source={require('../assets/startpt1.png')}
          style={{height: 50, width: 78}}
        />
      </TouchableOpacity>


       <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={{bottom:-260}} onPress={this._goToSignup}>
              <Text> Time Length </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{bottom: -240}} onPress={this._goToSignup}>
              <Text>Number of People</Text>
            </TouchableOpacity >
      </View>
    



      <View style={{justifyContent: 'center', alignItems: 'center', flex:1, bottom: -100}}>
          <Select
            width={200}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Number of People"
            onSelect={this._people.bind(this)}>
            <Option value = {{id : "1"}}>1</Option>
            <Option>2</Option>
            <Option>3</Option>
          </Select>          
          <OptionList ref="OPTIONLIST"/>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', flex:1, bottom: -100}}>
          <Select
            width={200}
            ref="SELECT2"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Approx Time Length"
            onSelect={this._people.bind(this)}>
            <Option value = {{id : "1 hr"}}>1</Option>
            <Option>2 hr</Option>
            <Option>3 hr</Option>
          </Select>          
          <OptionList ref="OPTIONLIST"/>
      </View>




    </View>
    );
  
}
_goToSignup = () => {
    this.props.navigator.push(Router.getRoute('signup'));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

 map: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 600,
    width: 400
  },

});

