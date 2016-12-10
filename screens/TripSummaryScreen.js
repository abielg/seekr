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
  AsyncStorage,
} from 'react-native';

export default class TripSummaryScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selection: 'eesha'};
    this._loadInitialState();
  }

  _loadInitialState = async () => {
    try {
      var value = await AsyncStorage.getItem('isStateLocal');
      if (value !== null){
        this.setState({...this.state, statusIsLocal: value==='true'});
      } else {
        this.setState({...this.state, statusIsLocal: false});
      }
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  };

  _renderStars(numStars) {
    count = 1;
    result = [];
    while (count <= 5){
      if (count <= numStars){
        result.push(<Image key={count} source={require('../assets/fullStar.png')} style={styles.stars}/>);
      } else {
        result.push(<Image key={count} source={require('../assets/emptyStar.png')} style={styles.stars}/>);
      }
      count += 1;
    }
    return result
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
        <View style={styles.absoluteEeshaGroup}>
          {
            this.state.statusIsLocal ? 
            <Image
              source={require('../assets/paul.jpg')}
              style={{
                height: 70,
                width: 70,
                borderRadius: 35,
              }}
            />

            :
            (<Image
              source={require('../assets/eesha.jpg')}
              style={{
                height: 70,
                width: 70,
                borderRadius: 35,
              }}
            />)
          }
          <Text style={styles.eeshaFont}> {this.state.statusIsLocal ? 'Paul' : 'Eesha'} </Text>
          <View style={styles.starContainer}>
            {this._renderStars(4)}
          </View>
          <Text style={styles.eeshaMoneyFont}> $45.64</Text>
        </View>
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
        <View style={styles.routeContainer}>
          <View style={styles.routeGutter}/>
          <Image
            source={require('../assets/group.png')}
            style={{
              //flex: 2
              marginRight: 10,
            }}
          />
          <View style={styles.routeTextGroup}>
            <Text style={styles.routeText}> Stanford University</Text>
            <Text style={styles.routeText}> Bay Bridge </Text>
            <Text style={styles.routeText}> Sushiritto </Text>
            <Text style={styles.routeText}> Bar Basic </Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <Image
            source={require('../assets/camera-timer.png')}
            style={{
              height: 30,
              width: 30,
              opacity: 0.7,
            }}
          />
          <View style={styles.statsTextGroup}>
            <Text style={styles.miniStatsText}> Time </Text>
            <Text style={styles.bigStatsText}> 3 hr 50 min </Text>
          </View>
          <View style={styles.statsDivider}/>
          <Image
            source={require('../assets/placeholder.png')}
            style={{
              height: 30,
              width: 30,
              opacity: 0.7,
            }}
          />
          <View style={styles.statsTextGroup}>
            <Text style={styles.miniStatsText}> Stops </Text>
            <Text style={styles.bigStatsText}> 4 </Text>
          </View>
          <View style={styles.statsDivider}/>
          <Image
            source={require('../assets/picture.png')}
            style={{
              height: 30,
              width: 30,
              opacity: 0.7,
            }}
          />
          <View style={styles.statsTextGroup}>
            <Text style={styles.miniStatsText}> Snaps </Text>
            <Text style={styles.bigStatsText}> 46 </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <PlaybackButton image={playback} title='Start Playback ' action={this.goToPlayback}/>
          <TouchableOpacity onPress={this.goHome}>
            <Text style={styles.doneLink}> Done </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  goToPlayback = () => {
    this.props.navigator.push(Router.getRoute('tripPlayback'));
  }
  goHome = () => {
    this.props.navigator.push(Router.getRoute('MainMap'));
  }
}

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
  },
  stars : {
    height: 15,
    width: 15,
  }, 
  eeshaMoneyFont: {
    fontFamily: 'Avenir',
    fontSize: 20,
    opacity: 0.7,
    right: 5,
  },
  eeshaFont: {
    fontFamily: 'Avenir',
    fontSize: 17,
    //fontWeight: 'bold',
  },
  absoluteEeshaGroup: {
    position: 'absolute',
    top: 300,
    left: 275,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'rgba(0,0,0,0)',
    zIndex:2,
  },
  bigContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  statsDivider: {
    height: 50,
    width: 1,
    opacity: 0.6,
    backgroundColor: 'black',
    marginRight: 10,
    marginLeft: 10,
  },
  bigStatsText: {
    fontFamily: 'Avenir',
    fontSize: 15,
    fontWeight: 'bold'
  },
  miniStatsText: {
    fontFamily: 'Avenir',
    fontSize: 12,

  },
  statsTextGroup: {
    flexDirection: 'column',
    marginLeft: 5,
  },
  statsContainer: {
    flex:0.3,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    //backgroundColor: 'purple',

  },
  doneLink:{
    color: '#FF8217',
    fontFamily: 'Avenir',
    fontSize: 15,
    paddingTop: 15,
  },
  routeContainer: {
    flex: 0.55,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems:'center',
    //backgroundColor: 'pink',
  },
  routeGutter: {
    flex: 0.5,
  },
  routeTextGroup: {
    flexDirection: 'column',
    flex: 5,
  },
  routeText: {
    fontFamily: 'Avenir',
    fontSize: 13,
    top: 5,
    marginBottom: 12,
  },
  mapImg: {
    flex: 0.1,
    //resizeMode : 'stretch',
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
    flex: 0.2,
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
    flex: 0.4,
    justifyContent: 'center',
    alignItems:'center',
    bottom: 10,
  },

});
