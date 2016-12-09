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
  TextInput,
  TouchableHighlight,
  TouableWithoutFeedback  
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
            <Text style={styles.title}> Eesha has 1 minute to accept your request.  </Text>
				<CountDown
				  text={':'} //default '' 
				  time={59} //default 60 
				  buttonStyle={{padding:0, bottom: 190}}
				  textStyle={{color:'black', fontSize: 36, fontFamily: 'Avenir'}} //default black 
				  //disabledTextStyle={{color:'gray'}} //default gray 
				/>           
		 	<TouchableOpacity style={styles.cancelButton} onPress={this.goToMainMap}>
              <Text style={{color: 'white'}}>X</Text>
            </TouchableOpacity>
            <Text style={styles.cancel, fontFamily: 'Avenir'}> Cancel </Text>
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

  spinner: {
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title : {
    flex: 8,
    color: 'black',
    fontSize: 14,
    margin: 0,
    top: 100
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
    backgroundColor: 'white',
    flex: 6,
  },

  cancelButton : {
    borderWidth: 1,
    borderColor: 'white',
    height:20,
    width: 20,
    borderRadius: 64,
    margin: 0,
    backgroundColor: '#FF8217',
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40
  },

  
  });


