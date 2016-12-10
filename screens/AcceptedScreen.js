import Exponent from 'exponent';
import React from 'react';
import Toolbar from '../components/Toolbar';
import Router from '../navigation/Router';
import Button from '../components/Button';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
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
    this._loadInitialState();
  }

  _loadInitialState = async () => {
    try {
      var value = await AsyncStorage.getItem('isStateLocal');
      if (value !== null){
        this.setState({ ...this.state, statusIsLocal: value==='true'});
      } else {
        this.setState = ({ ...this.state, statusIsLocal: false});
      }
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  };

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.background}>  
            <Text style={styles.title}> {this.state.statusIsLocal? 'Paul':'Eesha'} has accepted! </Text>
            <Image source={require('../assets/abielandeesha.png')} style ={{bottom: 0 }}/>
            <Text style={{flex: 8,color: 'black',fontFamily: 'Avenir', fontSize: 18,margin: 0,top: 38}}> Going on an adventure with {this.state.statusIsLocal? 'Paul':'Eesha'}  </Text>
            <Button title='Continue' action={this._goToOnTheWay} />
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
  });

