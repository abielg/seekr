import Exponent from 'exponent';
import React from 'react';
import Toolbar from '../components/Toolbar';
import Button from '../components/Button';
import Router from '../navigation/Router';


import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar
} from 'react-native';

export default class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = { on:true};
  }

  switchNotif() {
    this.setState({on : !this.state.on});
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content'/>
        <Toolbar navigator={this.props.navigator} left='<' title='Settings' />
        <View style={styles.flexwrapper}>
          <View style={{flex:1}}/>
          <View style={styles.mainwrapper}>
            <View style={{flexDirection:'row', justifyContent: 'center', marginTop:40}}>
              <Text style={styles.text}>Push Notifications:</Text>
              <TouchableOpacity style={this.state.on ? styles.toggleButtonOn : styles.toggleButtonOff} onPress={this.switchNotif.bind(this)}>
                <Text style={this.state.on ? styles.onText : styles.offText}>{this.state.on ? 'On' : 'Off'}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.logout} onPress={this.goToHome.bind(this)}>
              <Text style={styles.onText}>Log Out</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1}}/>
        </View>
      </View>
    );
  }
  _goBack = () => {
    this.props.navigator.pop();
  }

  goToHome = () => {
    this.props.navigator.push(Router.getRoute('splashScreen'));
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  flexwrapper : {
    flexDirection: 'row',
  },

  mainwrapper : {
    flex: 8,
        alignItems: 'center',
    justifyContent: 'center'
  },

  labelFieldWrapper : {
    flexDirection: 'row',
  },

  text : {
    fontFamily: 'Avenir',
    fontSize: 20,
    marginRight: 10
  },
  toggleButtonOn : {
    width: 60,
    height: 40,
    backgroundColor: '#FF8218',
    borderRadius:4,
    justifyContent: 'center',
    alignItems: 'center',
    top: -5
  },
  toggleButtonOff : {
    width: 60,
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#FF8218',
    borderRadius:4,
    justifyContent: 'center',
    alignItems: 'center',
    top: -5
  },
  onText : {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 20
  },
   offText : {
    color: 'black',
    fontFamily: 'Avenir',
    fontSize: 20
  },
  logout : {
    backgroundColor: '#9D0202',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 40,
    borderRadius: 4,
    top: 450
  }
});
