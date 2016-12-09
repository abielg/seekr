import Exponent from 'exponent';
import React from 'react';
import Toolbar from '../components/Toolbar';
import Button from '../components/Button';
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
} from 'react-native';

//TODO: make stars higher res
export default class RateTripScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      1: require('../assets/emptyStar.png'),
      2: require('../assets/emptyStar.png'),
      3: require('../assets/emptyStar.png'),
      4: require('../assets/emptyStar.png'),
      5: require('../assets/emptyStar.png'),
    };
  }

  _renderStars() {
    count = 1;
    result = [];
    for (var i =1 ; i<= 5; i++){
      result.push(
        <TouchableHighlight key={i} onPress={this._onPressStar(i)}>
          <Image  source={this.state[i]} style={styles.star}/>
        </TouchableHighlight>
      );
    }
    return result
  }

  _onPressStar = (key) => {
    return () => {
      var newState = this.state;
      for (var i = 1; i <= key; i++){
        newState[i] = require('../assets/fullStar.png');
      }
      for (var i = key+1; i <= 5; i++){
        newState[i] = require('../assets/emptyStar.png');
      }
      this.setState(newState);
    };
  };

  render () {
    return (
      <View style={styles.bigContainer}>
        <Toolbar navigator={this.props.navigator} title='Trip Summary' />
        <View style={styles.bigGutterContainer}>
          <View style={styles.sideGutter}/>
          <View style={styles.container}>
            <Text style={styles.rateText}> Rate </Text>
            <View style={styles.starContainer}>
              {this._renderStars()}
            </View>
            <Text style={styles.rateText}> Leave a Review </Text>
            <TextLabelInput removeLabel={true}  height={200} />
            <View style={{alignItems:'center'}}>
              <Text style={styles.doneLink}> Done </Text>
            </View>
          </View>
          <View style={styles.sideGutter}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
  },
  starContainer:{
    flexDirection: 'row',
    paddingBottom: 50,
    left: 10,
  },
  star:{
    height: 35,
    width: 35,
  },
  doneLink:{
    color: '#FF8217',
    fontFamily: 'Avenir',
    fontSize: 20,
  },
  bigGutterContainer: {
    //position: 'absolute',
    //left: 0,
    //top: 0,
    //justifyContent: 'center',
    //alignItems: 'center',
    zIndex:2,
    backgroundColor: 'rgba(0.2, 0.2, 0.2, 0.7)',
    flexDirection: 'row',
    flex: 1,
  },
  sideGutter: {
    flex: 0.2,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    //alignItems: 'center',
  },
  rateText: {
    flexDirection: 'row',
    fontFamily: 'Avenir',
    fontSize: 25,
    color: 'white',
    paddingBottom: 10,
  },
});
