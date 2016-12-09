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

export default class LocalProfile extends React.Component {

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
      <View>
        <StatusBar barStyle = 'dark-content'/>
        <Toolbar navigator={this.props.navigator} left='<' title='Eesha&#39;s Profile' />
        <ScrollView>
          <View style={styles.mainwrapper}>
            <View style={{flex:1}}/>
            <View style={styles.centerwrapper}>
              <Image
                  source={require('../assets/eesha.jpg')}
                  style={styles.pic}
              />
              <Text style={styles.nameAge}>Eesha, 22</Text>
              <Button title='Request' action={this._goToTimerScreen}/>
              <View style={{}}>
                <Text style={styles.interests}>
                  <Text style={{color:'black', fontWeight:'bold'}}>Seeking:</Text>   Partying   Bars    Shopping
                </Text>
                <Text style={styles.bio}>
                  Mixology enthusiast, lover of unique cocktails. Let’s go 
                  shoppingat local botiques, brew some beer, & go skinny dip
                  in Lake Lag!
                </Text>
                <Text style={{fontWeight:'bold', fontFamily:'Avenir', marginTop:20}}>Reviews:</Text>
                <View style={styles.reviewsContainer}>
                  <View style={{flexDirection:'row', marginBottom: 5, padding:5}}>
                    {this._renderStars(4)}
                    <Text style={styles.reviewTextHeading}>16 total reviews</Text>
                  </View>
                  <Text style={styles.reviewSubtitle}>Most Recent:</Text>
                  <View style={styles.reviewsContainer}>
                    <View style={{flexDirection:'row', padding:5}}>
                    {this._renderStars(5)}
                    <Text style={styles.reviewSubtitle}>SO MUCH FUN!</Text>
                  </View>
                  <Text style={{left: 5, marginBottom: 5}}>Joe, New York City 11/29/2016</Text>
                  <Text style={styles.reviewText}>
                    Requested Eesha and she took me to an event called Llamas + VR (?! only
                    in SV haha), a rooftop party her friend was throwing in SOMA and then to a hidden lake
                    in SF. Ended the night with some bomb tacos at a hole in the wall joint in the Mission.
                    Best way to blow off some steam after my failed interview at Google & the others were so
                    jealous because all they did was see the Golden Gate Bridge. 
                  </Text>
                  </View>
                  <View style={{alignItems:'center'}}>
                    <Text style={{position: 'absolute', right:5, top:1, fontSize:20}}>></Text>
                    <Text style={{fontFamily: 'Avenir', fontWeight:'bold', padding:5}}>See 15 more reviews</Text>
                  </View>
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
    top: 15
  },

  pic: {
    height: screenWidth * .6,
    width: screenWidth * .6,
    margin: 5,
    borderRadius: (screenWidth * .6) / 2.0,
    borderWidth: 4,
    borderColor: '#FF8217',
    top: 15
  },

    interests : {
    fontFamily: 'Avenir',
    fontSize: 14,
    color:'#FF8217'
  },
  bio : {
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'Avenir',
  },
  reviewsContainer : {
    borderWidth: 1,
    borderColor: '#F1F0F0',
    marginTop: 5,
    marginBottom: 5
  },
  reviewTextHeading: {
    fontSize: 14,
    fontFamily: 'Avenir',
    left: 10
  },
  reviewSubtitle: {
    fontSize: 14,
    fontFamily: 'Avenir',
    left: 10,
    fontWeight: 'bold'
  },
  reviewText: {
    fontSize: 14,
    fontFamily: 'Avenir',
    left: 5,
    width: (screenWidth * 0.73),
    textAlign: 'justify'
  },
});
