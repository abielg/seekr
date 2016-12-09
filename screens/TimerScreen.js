import Exponent from 'exponent';
import React from 'react';
import Toolbar from '../components/Toolbar';
import Router from '../navigation/Router';
import TouristMapView from '../components/TouristMapView';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback  
} from 'react-native';

import {
  StackNavigation,
} from '@exponent/ex-navigation';
import 
  Spinner from 'react-native-spinkit';
import CountDown from '../components/Countdown';
import TimerMixin from 'react-timer-mixin';

export default class FindingScreen extends React.Component {

componentDidMount () {
    setTimeout(() => {
	  this.props.navigator.push(Router.getRoute('AcceptedScreen'));
    }, 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>  
          <Text style={styles.title1}> Eesha has</Text>
  				<CountDown
  				  text={':'} //default '' 
  				  time={59} //default 60 
  				  buttonStyle={styles.countdown}
  				  textStyle={{color:'black', fontSize: 36}} //default black 
            style={styles.countdown}
  				/>
          <Text style={styles.title2}>to accept your request.</Text>
   	      <TouchableOpacity style={styles.cancelButton} onPress={this.goToMainMap}>
            <Text style={{color: 'white'}}>X</Text>
          </TouchableOpacity>
          <Text style={styles.cancel}> Cancel </Text>
        </View> 
      </View>      
    );
  }

goToMainMap = () => {
    this.props.navigator.push(Router.getRoute('MainMap'));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown : {
    padding:80, 
    bottom: 20,
    borderWidth: 5,
    borderRadius: 140,
    borderColor: '#FF8218'
  },
  spinner: {
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title1 : {
    flex: 8,
    color: 'black',
    fontSize: 28,
    fontFamily: 'Avenir',
    margin: 0,
    top: 110
  },
  title2 : {
    flex: 8,
    color: 'black',
    fontSize: 28,
    fontFamily: 'Avenir',
    margin: 0,
    top: 30
  },
  cancel : {
    color: 'black',
    fontSize: 15,
    margin: 0,
    bottom: 35
  },

  background : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 6,
  },

  cancelButton : {
    borderWidth: 1,
    borderColor: 'white',
    height:40,
    width: 40,
    borderRadius: 20,
    margin: 0,
    backgroundColor: '#FF8217',
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40
  },

  
  });


