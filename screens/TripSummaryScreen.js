import Exponent from 'exponent';
import React from 'react';
import Toolbar from '../components/Toolbar';
import PlaybackButton from '../components/PlaybackButton';
import Router from '../navigation/Router';
import Drawer from 'react-native-drawer';
import MenuView from '../components/MenuView';
import TextLabelInput from '../components/TextLabelInput';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

export default class TripSummaryScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    var playback =             
      <Image
        source={require('../assets/play-button.png')}
        style={{
          height: 25,
          width: 25,
        }}
      />;
    return (
      <View style={styles.bigContainer}>
        <Toolbar navigator={this.props.navigator} title='Trip Summary' />
        <View style={styles.adventureHeader}>
          <Text style={styles.adventureComplete}> Your adventure is complete! </Text>
          <View style={styles.shareIcon}>
            <Image
              source={require('../assets/share-file.png')}
              style={{
                height: 25,
                width: 25,
              }}
            />
            <Text style={styles.shareText}> Share </Text>
          </View>
        </View>
        <Image
          source={require('../assets/trip-summary.png')}
          style={styles.mapImg}
        />
        <Image
          source={require('../assets/trip-summary.png')}
          style={styles.routeImg}
        />
        <View style={styles.statsContainer}>
          <Image
            source={require('../assets/camera-timer.png')}
            style={{
              height: 25,
              width: 25,
            }}
          />
          <Image
            source={require('../assets/placeholder.png')}
            style={{
              height: 25,
              width: 25,
            }}
          />
          <Image
            source={require('../assets/picture.png')}
            style={{
              height: 25,
              width: 25,
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PlaybackButton image={playback} title='Start Playback '/>
          <Text style={styles.doneLink}> Done </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  statsContainer: {
    flex:0.35,
    flexDirection: 'row',
    alignItems:'center',

  },
  doneLink:{
    color: '#FF8217',
    fontFamily: 'Avenir',
    fontSize: 15,
  },
  routeImg: {
    flex: 0.3,
    width: Dimensions.get('window').width,
  },
  mapImg: {
    flex: 0.4,
    width: Dimensions.get('window').width,
  },
  shareText: {
    color: '#FF8217',
    fontFamily: 'Avenir',
    fontSize: 10,
    paddingTop: 5,
  },
  shareIcon: {
    flexDirection: 'column',
    left: 110,
    justifyContent: 'center',
    alignItems:'center',
  },
  adventureHeader: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  adventureComplete: {
    color: 'black',
    fontFamily: 'Avenir',
    fontSize: 17,
    left: 80,
  },
  buttonContainer: {
    flexDirection: 'column',
    flex: 0.35,
    justifyContent: 'center',
    alignItems:'center',
  },

});
