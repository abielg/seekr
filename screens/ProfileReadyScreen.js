import Exponent from 'exponent';
import React from 'react';
import Button from '../components/Button';
import Router from '../navigation/Router';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';

export default class ProfileReadyScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle = 'dark-content'/>

        <View style={{flex:1}}/>
        <View style={styles.mainwrapper}>
          <Text style={styles.name}>Abiel's Profile</Text>
          <View style={styles.picture}>
            <TouchableOpacity style={styles.editButton} onPress={this._goToSignup}>
              <Text style={{color: '#FF8217'}}>Edit</Text>
            </TouchableOpacity>
            <Image
              source={require('../assets/abiel.jpg')}
              style={{
                height: 150,
                width: 150,
                margin: 5,
                borderRadius: 75,
                borderWidth: 4,
                borderColor: '#FF8217',
              }}
            />
            <Text style={{fontSize: 26, fontFamily: 'Avenir'}}>Abiel, 21</Text>
            <Text style={styles.interests}>
              <Text style={{color:'black'}}>Seeking:</Text> Partying Bars Shopping
            </Text>
            <Text style={styles.bio}>
              Mixology enthusiast, lover of unique cocktails. Let’s go 
              shoppingat local botiques, brew some beer, & go skinny dip
              in Lake Lag!
            </Text>
            <Image 
              source={require('../assets/blackLogo.png')}
              style ={{ margin: 20 }}
            />
            <View style={styles.bottomButton}>
              <Button title='Start Seeking >'>
              </Button>
            </View>
          </View>
        </View>
        <View style={{flex:1}}/>
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  mainwrapper:{
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    fontSize: 17,
    flex: 0.5,
    top: 30,
    fontFamily: 'Avenir',
  },

  picture: {
    flex: 5,
    alignItems: 'center',
  },

  editButton : {
    margin: 5,
  },

  interests : {
    marginTop: 10,
    fontFamily: 'Avenir',
    color: '#FF8217'
  },

  bio : {
    marginTop: 20,
    fontSize: 11,
    fontFamily: 'Avenir',
  },

  bottomButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
});
