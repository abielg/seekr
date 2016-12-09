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
            <Text style={styles.title}> Eesha has accepted! </Text>
            <Image source={require('../assets/abielandeesha.png')} style ={{bottom: 0 }}/>
            <Text style={{flex: 8,color: 'black',fontFamily: 'Avenir', fontSize: 18,margin: 0,top: 38}}> Going on an adventure with Eesha </Text>


            <TouchableOpacity style={styles.continueButton} onPress={this._goToOnTheWay}>
              <Text style={{color: 'white'}}>Continue</Text>
            </TouchableOpacity>
          </View> 

        </View>      
    );
  }

_goToOnTheWay = () => {
    this.props.navigator.push(Router.getRoute('OnTheWay'));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Avenir'
  },

  spinner: {
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title : {
    flex: 8,
    color: 'black',
    fontSize: 32,
    margin: 0,
    top: 50,
    fontFamily: 'Avenir'
  },

  cancel : {
    flex: 1,
    color: 'orange',
    fontSize: 15,
    margin: 0,
    bottom: 20
  },

  background : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 6,
  },

  continueButton : {
    borderWidth: 1,
    borderColor: 'orange',
    height:40,
    width: 100,
    borderRadius: 2,
    margin: 0,
    backgroundColor: '#FF8217',
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 4,
    fontFamily: 'Avenir'
  },

  
  });

