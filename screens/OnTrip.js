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
  NSLocationWhenInUseUsageDescription,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
import {
  StackNavigation,
} from '@exponent/ex-navigation';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';


export default class OnTrip extends React.Component {


constructor(props){
  super(props);
  this.state = {
    picIndex: 'normalMap',
  }
}

_updatePic = (newPicIndex) => {
  this.setState({
    picIndex: newPicIndex,
  });
};

_renderDstItem = () => {
  if (this.state.picIndex === 'normalMap'){
    return  "";
  }
  else if (this.state.picIndex === 'secondDst'){
    return "Sushirrito";
  }
  else if (this.state.picIndex === 'thirdDst'){
    return "Bar Basic";
  }

};

_renderMapItem = () => {
  if (this.state.picIndex === 'normalMap'){
    return  (
      <MapView
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        showsPointsofInterest={true}
        region={{latitude: 37.4275, longitude: -122.1697, latitudeDelta: .0050, longitudeDelta: .0050}}
      /> );
  }
  else if (this.state.picIndex === 'secondDst'){
    return (
      <Image 
        resizeMode= 'stretch'
        source={require('../assets/spot2.png')} 
        style ={styles.dstPic}
      /> 
    );
  }
  else if (this.state.picIndex === 'thirdDst'){
    return (
      <Image 

        source={require('../assets/spot3.png')} 
        style ={styles.dstPic}
      /> 
    );
  }

};

render() {
    return (
      <View style={styles.container}>
        <View style={styles.dropdownGroup}>
          <View style={styles.labelBlock}>
            <Text style={styles.labelBlockText}> Next Stop: </Text>
            <Text style={styles.dstBlockText}> {this._renderDstItem()} </Text>
          </View>
        </View>
        <Toolbar navigator={this.props.navigator} title='On Adventure' right='Done' />
        {this._renderMapItem()}
        <View style={styles.suggestedContainer}>
          <Text style={styles.suggestedText}> Suggested Next Stops</Text>
          <View style={styles.suggestedPicContainer}>
            <TouchableOpacity style={styles.suggestedPicGroup} onPress={this._updatePic.bind(this, 'secondDst')}>
              <Image 
                source={require('../assets/squaresushi.png')} 
                style ={styles.pic}
              /> 
              <Text style={styles.picText}>
                Sushirrito
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.suggestedPicGroup} onPress={this._updatePic.bind(this, 'thirdDst')}>
              <Image 
                source={require('../assets/offthegrid.png')} 
                style ={styles.pic}
              /> 
              <Text style={styles.picText}>
                Off the Grid
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>


    );
  }

_goToMainMap = () => {
    this.props.navigator.push(Router.getRoute('MainMap'));
  }
}

const styles = StyleSheet.create({
  labelBlockText: {
    fontFamily: 'Avenir',
    fontSize: 18,
  },
  dstBlockText: {
    fontFamily: 'Avenir',
    fontSize: 18,
    backgroundColor: 'white',
    width: 150,
    //paddingRight: 20,
    paddingLeft: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
  labelBlock: {
    flex: 1,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
  },
  dropdownGroup: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.95,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    // Minus height/2 to get center
    top: (Dimensions.get('window').height * 0.1),
    left: (Dimensions.get('window').width/2) - Dimensions.get('window').width * 0.475,
    //zIndex: 2,

  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  map: {
    flex: 1,
  },
  dstPic: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 1,

  },
  suggestedContainer: {
    flex:0.45,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  suggestedText: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    left: 20,
    paddingBottom: 5,
    top: 10,
  },
  suggestedPicContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    flexDirection: 'row',
    top: 10,
  },
  pic: {
    width: 140, 
    height: 135, 
    borderRadius: 10, 
  },
  picText: {
    color: 'white', 
    fontFamily: 'Avenir', 
    fontWeight: 'bold', 
    fontSize: 22,
    bottom: 50,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  suggestedPicGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingRight: 10,
    paddingLeft: 10,
  },

});

