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

export default class TripPlayback extends React.Component {

  constructor(props) {
    super(props);
    this.state = { current:0};

  }

  _next = (direction, currentState) => {
    if (currentState == 3 && direction==1){
      this.setState({current: 0});
    } else if (currentState == 0 && direction==-1) {
      this.setState({current: 3});
    } else {
      this.setState({current: currentState + direction});
    }
  }

  pics = [require('../assets/sf-baybridge.jpg'), require('../assets/sf-baker-beach.jpg'),
          require('../assets/sf-chinatown.jpg'), require('../assets/sf-mission.jpg')];
  places = ['Bay Bridge', 'Baker Beach', 'Chinatown', 'The Mission'];
  
  render() {
    return (
      <View style={styles.container}>
        <Toolbar title='Trip Playback' navigator={this.props.navigator} left='<' />
        <View>
          <View style={styles.controlSection}>
            <View style={{top:8, flexDirection:'row'}}>
              <TouchableOpacity onPress={this._next.bind(this,-1, this.state.current)}>
                <Image source={require('../assets/backward.png')} style={styles.leftArrow} />
              </TouchableOpacity>
              <Text style={{fontFamily:'Avenir', fontSize:18}}>{this.places[this.state.current]}</Text>
              <TouchableOpacity onPress={this._next.bind(this, 1, this.state.current)}>
                <Image source={require('../assets/forward.png')} style={styles.rightArrow} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.shareIcon}>
              <Image source={require('../assets/share.png')}/>
            </TouchableOpacity>
          </View>
          <Image source={this.pics[this.state.current]} style={styles.playbackImage} />
        </View>
        <Text style={styles.mapSubtitle}>Map View</Text>
        <Image source={require('../assets/mapRoute.png')} style={styles.mapImage} />
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
    width: screenWidth,
    left: 17
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
  shareIcon: {
    flexDirection: 'column',
    left: 15,
    justifyContent: 'center',
    alignItems:'center',
  },
  playbackImage : {
    height: 250,
    width: screenWidth,
  },
  mapSubtitle : {
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 5,
    color: 'grey',
    fontFamily:'Avenir',
  },
  mapImage : {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 30,
    width: screenWidth - (2 * 20)
  }
});