import Exponent from 'exponent';
import React from 'react';
import Button from '../components/Button';
import Router from '../navigation/Router';
import Toolbar from '../components/Toolbar';
import Dimensions from 'Dimensions';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';

var screenWidth = Dimensions.get('window').width;

export default class ProfileReadyScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar title='Trip Playback' navigator={this.props.navigator} left='<' />
        <View>
          <View style={styles.controlSection}>
            <Image source={require('../assets/backward.png')} style={styles.leftArrow} />
            <Text style={{fontFamily:'Avenir', fontSize:18}}>Bay Bridge</Text>
            <Image source={require('../assets/forward.png')} style={styles.rightArrow} />
            <Image source={require('../assets/share.png')} syle={styles.share}/>
          </View>
          <Image source={require('../assets/playback1.jpg')} style={styles.playbackImage} />
        </View>
        <Text style={styles.mapSubtitle}>Map View</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  controlSection : {
    flexDirection:'row',
    justifyContent: 'center',
    padding: 10,
    width: screenWidth
  },
  leftArrow : {
    top: 3,
    marginLeft: 25,
    marginRight: 25
  },
  rightArrow : {
    top: 3,
    marginLeft: 25,
    marginRight: 25
  },
  share : {
    left: 50
  },
  playbackImage : {
    width: screenWidth
  },
  mapSubtitle : {
    margin: 15,
    color: 'grey',
    fontFamily:'Avenir',
  }
});