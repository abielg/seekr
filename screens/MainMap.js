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
 

export default class MainMap extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        selected: 'None',
      }
  }

  _toggleState = (newState) => {
    return () => {
      if (this.state.selected === 'numPeople' || this.state.selected === 'numHours'){
        this.setState({
          selected: 'None',
        });
      } else {
        this.setState({
          selected: newState,
        });
      }
    };
  };

  _renderChoices() {

    result = [];

    if (this.state.selected === 'numPeople'){
      result.push(
        <SelectionButton width={Dimensions.get('window').height * 0.25} key={1} title='2 People' />
      );
      result.push(
        <SelectionButton width={Dimensions.get('window').height * 0.25} key={2} title='3 People' />
      );
    } else if (this.state.selected === 'numHours'){
      result.push(
        <SelectionButton width={Dimensions.get('window').height * 0.25} key={1} title='4 Hours' />
      );
      result.push(
        <SelectionButton width={Dimensions.get('window').height * 0.25} key={2} title='5 Hours' />
      );
    }

    return result;
  }

  render() {
      return (
        <Drawer
          ref={(ref) => this._drawer = ref}
          content={<MenuView/>}
          openDrawerOffset={0.3}
          closedDrawerOffset={0}
          acceptTap = {true}
          >
          <View style={styles.container}>
            <Toolbar navigator={this.props.navigator} left='Hamburger' title='Seekr' onPress={()=>{this._drawer.open()}} />
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                showsUserLocation={true}
                followsUserLocation={true}
                showsPointsofInterest={true}
                region={{latitude: 37.4275, longitude: -122.1697, latitudeDelta: .0050, longitudeDelta: .0050}}
                />
                <TouchableOpacity style={styles.startPoint} onPress={this._goToSignup}>
                  <Image
                    source={require('../assets/startpt1.png')}
                    style={{
                      height: 50, 
                      width: 78,
                    }}
                  />
                </TouchableOpacity>
                <View style={styles.buttonGroup}>
                  {this._renderChoices()}
                </View>
                
                <View style={styles.dropdownGroup}>
                  <View style={styles.labelBlock}>
                    <Text style={styles.labelBlockText}> Number of People</Text>
                  </View>
                  
                  <TouchableOpacity style={styles.labelBlock2} onPress={this._toggleState('numPeople')}>
                    <Text style={styles.labelBlock2Text}> 1</Text>
                    <Icon style={styles.downIcon} name="sort-down" size={20} color="#FFF" />
                  </TouchableOpacity>

                  <View style={styles.labelBlock}>
                    <Text style={styles.labelBlockText}> Length of Activity</Text>
                  </View>

                  <TouchableOpacity style={styles.labelBlock2} onPress={this._toggleState('numHours')}>
                    <Text style={styles.labelBlock2Text}> 3</Text>
                    <Icon style={styles.downIcon} name="sort-down" size={20} color="#FFF" />
                  </TouchableOpacity>
                </View>
            </View>

          </View>
        </Drawer>

      );
    
  }
  _goToSignup = () => {
      this.props.navigator.push(Router.getRoute('localFeed'));
  }
}

const styles = StyleSheet.create({
  buttonGroup:{
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.95,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    // Minus height/2 to get center
    top: (Dimensions.get('window').height * 0.67),
    left: (Dimensions.get('window').width/2) - Dimensions.get('window').width * 0.44,
    zIndex: 2,
  },
  downIcon: {
    paddingBottom: 7,
    paddingLeft: 5,
  },
  labelBlockText: {
    fontFamily: 'Avenir',
    fontSize: 14,
  },
  labelBlock: {
    flex: 1,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  labelBlock2: {
    flex: 0.35,
    height:40,
    backgroundColor: '#FF8217',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelBlock2Text: {
    fontFamily: 'Avenir',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  dropdownGroup: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.95,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    // Minus height/2 to get center
    top: (Dimensions.get('window').height * 0.75),
    left: (Dimensions.get('window').width/2) - Dimensions.get('window').width * 0.475,
    zIndex: 2,

  },
  container: {
    flex: 1,
    flexDirection: 'column',
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


  map: {
    flex: 1,
  },

});

