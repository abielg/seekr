import Exponent from 'exponent';
import React from 'react';
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

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.topArea}>  
          <Image 
            source={require('../assets/logo.png')}
            style ={{ margin: 0, }}
          />
          <Text style={styles.title}> Seekr. </Text>
        </View>          
        <View style = {styles.bottomArea}>
          <View style={{flex: 1,}}/>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <View style={{flex: 2,}}/>
            <TouchableOpacity style={styles.leftButton} onPress={this._goToSignup}>
              <Text style={{color: 'white', fontFamily: 'Avenir'}}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{flex: 1,}}/>
            <TouchableOpacity style={styles.rightButton} onPress={this.goToMap}>
              <Text style={{fontFamily: 'Avenir'}}>Log In</Text>
            </TouchableOpacity>
            <View style={{flex: 2,}}/>
          </View>
          <View style={{flex: 1,}}/>
        </View>
      </View>
    );
  }

  _goToSignup = () => {
    this.props.navigator.push(Router.getRoute('signup'));
  }

  goToMap = () => {
    this.props.navigator.push(Router.getRoute('MainMap'));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title : {
    color: 'white',
    fontSize: 60,
    margin: 0,
    fontFamily: 'Avenir'
  },

  topArea : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF8217',
    flex: 6,

  },

  bottomArea : {
    backgroundColor: 'white',
    flex : 1,
  },

  leftButton : {
    borderWidth: 2,
    borderColor: '#FF8217',
    margin: 0,
    backgroundColor: '#FF8217',
    flex: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rightButton : {
    borderWidth: 2,
    borderColor: 'darkgrey',
    backgroundColor: 'white',
    flex: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
