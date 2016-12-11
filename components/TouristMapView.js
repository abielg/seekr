import React from 'react';
import Exponent from 'exponent';
import Router from '../navigation/Router';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  NSLocationWhenInUseUsageDescription,
  Dimensions
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
import Drawer from 'react-native-drawer';
import MenuView from '../components/MenuView';
import Toolbar from '../components/Toolbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectionButton from '../components/SelectionButton';
 

export default class TouristMapView extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
      return (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            showsUserLocation={false}
            followsUserLocation={true}
            showsPointsofInterest={true}
            region={{latitude: 37.4275, longitude: -122.1697, latitudeDelta: .0050, longitudeDelta: .0050}}
            />
            <TouchableOpacity style={styles.startPoint} onPress={this._goToSignup}>
              <Image
                source={require('../assets/eesha.jpg')}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                }}
              />
              <Text style={styles.etaText}> 4 mins </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.startPoint2} onPress={this._goToSignup}>
              <Image
                source={require('../assets/paul.jpg')}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                  }}
              />
              <Text style={styles.etaText}> 3 mins </Text>
            </TouchableOpacity>
        </View>

      );
  }
  _goToSignup = () => {
      this.props.navigator.push(Router.getRoute('touristProfile'));
  }
}

const styles = StyleSheet.create({
  etaText: {
    fontFamily: 'Avenir',
    fontSize: 14,
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 5,
  },
  mapContainer: {
    flex:1,
  },
  startPoint: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    top: (Dimensions.get('window').height/2) - 90,
    left: (Dimensions.get('window').width/2) - 78/2,
    zIndex: 2,
  },

  startPoint2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    top: (Dimensions.get('window').height/2),
    left: (Dimensions.get('window').width/2),
    zIndex: 2,
  },


  map: {
    flex: 1,
  },

});

