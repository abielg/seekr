import Exponent from 'exponent';
import React from 'react';
import Toolbar from '../components/Toolbar';
import Button from '../components/Button';
import Router from '../navigation/Router';
import Drawer from 'react-native-drawer';
import MenuView from '../components/MenuView';
import TouristMapView from '../components/TouristMapView';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class EmptyScreen extends React.Component {

  constructor(props) {
    super(props);
    //this.state = {drawerOpen: false};
  }
  
  render () {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<MenuView navigator={this.props.navigator}/>}
        openDrawerOffset={0.3}
        closedDrawerOffset={0}
        acceptTap = {true}
        >
        <View style={styles.container}>
          <Toolbar navigator={this.props.navigator} left='Hamburger' title='Rando Screen' onPress={()=>{this._drawer.open()}} />
          <TouristMapView/>
        </View>
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay:{
    flex: 1,
    backgroundColor: 'purple',
  },
});
