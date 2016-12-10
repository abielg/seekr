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
var screenHeight = Dimensions.get('window').height;

export default class TouristProfile extends React.Component {

  _renderStars(numStars) {
    count = 1;
    result = [];
    while (count <= 5){
      if (count <= parseInt(numStars)){
        result.push(<Image key={count} source={require('../assets/fullStar.png')} style={styles.stars}/>);
      } else {
        result.push(<Image key={count} source={require('../assets/emptyStar.png')} style={styles.stars}/>);
      }
      count += 1;
    }
    return result
  }

  render() {
    return (
      <View style={styles.superContainer}>
        <StatusBar barStyle = 'light-content'/>
        <Toolbar navigator={this.props.navigator} left='<' title='Paul&#39;s Profile' />
        <ScrollView>
          <View style={styles.mainwrapper}>
            <View style={{flex:1}}/>
            <View style={styles.centerwrapper}>
              <Image
                  source={require('../assets/paul.jpg')}
                  style={styles.pic}
              />
              <Text style={styles.nameAge}>Paul, 22</Text>
              <View>
                <Text style={styles.interests}>
                  <Text style={{color:'white', fontWeight:'bold'}}>Seeking:</Text>   Partying   Bars    Shopping
                </Text>
                <Text style={styles.bio}>
                  Mixology enthusiast, lover of unique cocktails. Let’s go 
                  shoppingat local botiques, brew some beer, & go skinny dip
                  in Lake Lag!
                </Text>
                <View style={{alignItems: 'center'}}>
                <Button title='Request' action={this._goToTimerScreen}/>
                </View>
              </View> 
            </View>
            <View style={{flex:1}}/>
          </View>
        </ScrollView>
      </View>
    );
  }
  _goToTimerScreen = () => {
    this.props.navigator.push(Router.getRoute('TimerScreen'));
  }
}

const styles = StyleSheet.create({
  superContainer : {
    backgroundColor: '#424141',
    height: screenHeight
  },

  mainwrapper: {
    flexDirection: 'row'
  },

  centerwrapper:{
    flex: 7,
    alignItems: 'center',
  },

  nameAge : {
    fontFamily: 'Avenir',
    fontSize: 30,
    top: 15,
    color: 'white',
    marginBottom: 10
  },

  pic: {
    height: screenWidth * .6,
    width: screenWidth * .6,
    margin: 5,
    borderRadius: (screenWidth * .6) / 2.0,
    borderWidth: 4,
    borderColor: '#FF8217',
    top: 15,
  },

    interests : {
    fontFamily: 'Avenir',
    fontSize: 14,
    color:'#FF8217',
    top: 15,
    marginBottom: 15
  },
  bio : {
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'Avenir',
    color: 'white',
    marginBottom: 20
  },
});
