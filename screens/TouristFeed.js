import Exponent from 'exponent';
import React from 'react';
import Toolbar from '../components/Toolbar';
import Router from '../navigation/Router';
import ProfileCard from '../components/ProfileCard';
import Dimensions from 'Dimensions';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar
} from 'react-native';

var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

export default class TouristFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { statusIsFeed: true };
  }

  _changeStatus(){
    this.setState({ statusIsFeed: !this.state.statusIsFeed });
  }


  render() {
    return (
      <View>
        <StatusBar barStyle='dark-content'/>
        <View style={styles.container}>
          <Toolbar navigator={this.props.navigator} left='<' title='Tourists Near You' />
          <View style={styles.buttonView}> 
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonSelected} onPress={this._changeStatus.bind(this)}>
                <Text style={styles.textSelected}>List</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonUnselected} onPress={this._changeStatus.bind(this)}>
                <Text style={styles.textUnselected}>Map</Text>
              </TouchableOpacity>
            </View>
          </View>  
          {this.state.statusIsFeed ? this._renderFeed() : this._renderMap()}    
        </View>
      </View>
    );
  }

  _renderMap = () => {
    return(<Text>Hi!</Text>);
  }

  _renderFeed = () => {
    return(
      <View style={styles.wrapper}>
        <View style={{flex: 1}}/>
        <View style={styles.mainSection}>  
          <Text style={styles.subtitle}>Choose Adventure Buddy:</Text>
          <ScrollView style={{height: 600}}>
            <ProfileCard name='Abiel Gutierrez' bio={this.bio1} pic={require('../assets/abiel.jpg')}
            age='21 years old'interests={this.interests1} reviewsNum='23' numStars='4' action={this._goToLocalProfile}/>
            <ProfileCard name='Eesha Choudhari' bio={this.bio2} pic={require('../assets/eesha.jpg')}
            age='22 years old'interests={this.interests2} reviewsNum='14' numStars='5'/>
            <ProfileCard name='Paul Ryan' bio={this.bio3} pic={require('../assets/paul.jpg')}
            age='43 years old'interests={this.interests3} reviewsNum='20' numStars='4'/>
          </ScrollView>
        </View>
        <View style={{flex: 1}}/> 
      </View>
    );
  }

  _goToLocalProfile = () => {
    this.props.navigator.push(Router.getRoute('localProfile'));
  }

  bio1 = 'Stanford CS major, sports fan, and nature freak. I like to take people around campus.'
  interests1 = 'Partying   Nature   Soccer'

  bio2 = 'Mixology enthusiast, lover of unique cocktails. Let’s go shopping at local botiques, brew some beer, & go skinny dip in Lake Lag!'
  interests2 = 'Partying   Bars   Shopping'

  bio3 = 'Travel agency owner. Love to take tourists to my favorite landmarks around town. Love conversing with fellow history buffs!'
  interests3 = 'Tourism   Foodie   Sights  History'
}



const styles = StyleSheet.create({
  subtitle : {
    fontFamily: 'Avenir',

  },
  wrapper : {
    flexDirection: 'row',
  },
  mainSection : {
    flex: 15,
  },
  subtitle: {
    marginTop: 10,
    fontFamily: 'Avenir'
  },
  buttonSelected : {
    height: 30,
    width: screenWidth * 0.2,
    backgroundColor: '#FF8218',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonUnselected : {
    height: 30,
    width: screenWidth * 0.2,
    backgroundColor: 'white',

    justifyContent: 'center',
    alignItems: 'center'
  },
  textSelected : {
    color: 'white',
    fontFamily: 'Avenir'
  },
  textUnselected : {
    color: 'black',
    fontFamily: 'Avenir'
  },
  buttonContainer : {
    flexDirection: 'row',
    borderRadius: 4,
    borderColor: '#FF8218',
    borderWidth:1,
    top: 10,
    marginBottom: 10
  },
  buttonView : {
    justifyContent:'center',
    alignItems: 'center'
  }

});
