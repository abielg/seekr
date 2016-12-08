import Exponent from 'exponent';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';

export default class MenuView extends React.Component {
  render () {
    return (
      <View style={styles.overlay}>
        <View style={styles.menuItemContainer}>
          <View style={styles.menuItemProfile}>
            <Image
              source={require('../assets/abiel.jpg')}
              style={{
                height: 70,
                width: 70,
                margin: 5,
                borderRadius: 35,
                marginRight: 20,
              }}
            />
            <Text style={styles.text}> 
              Abiel G.
            </Text>
          </View>
          <View style={styles.menuItemProfileMini}>
            <Text style={styles.miniText}> 
              Edit Profile 
            </Text>
          </View>
          <View style={styles.line}/>
          <View style={styles.menuItem}>
           <Icon style={{paddingRight:10}} name="money" size={25} color="#FFF" />
           <Text style={styles.text}> Payments </Text>
          </View>
          <View style={styles.line}/>
          <View style={styles.menuItem}>
            <Icon style={{paddingRight:10}} name="map" size={25} color="#FFF" />
           <Text style={styles.text}>  Trips </Text>
          </View>
          <View style={styles.line}/>
          <View style={styles.menuItem}>
            <Icon style={{paddingRight:10}} name="gear" size={25} color="#FFF" />
           <Text style={styles.text}> Settings </Text>
          </View>
          <View style={styles.line}/>
          <View style={styles.menuItemBlankSpace} />
          <View style={styles.menuItemFooter}>
            <Image
              source={require('../assets/backpacker-running.png')}
              style={{
                height: 80,
                width: 80,
                marginRight:10,
              }}
            />
            <Text style={styles.footerText}> Become a local? </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  overlay:{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    flexDirection: 'row',
  },
  line: {
    width: Dimensions.get('window').width,
    height: 1,
    backgroundColor: 'white',
  },
  miniText: {
    fontFamily: 'Avenir',
    fontSize: 10,
    color: 'white',
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: 'white',
  },
  menuItemContainer:{
    flex: 1,
    flexDirection: 'column',
  },
  menuItemProfile:{
    flex:3,
    flexDirection: 'row',
    height: 50,
    paddingLeft: 30,
    alignItems: 'center',
  },
  menuItemProfileMini:{
    paddingLeft: 50,
    bottom: 15,
  },
  menuItem:{
    flexDirection: 'row',
    alignItems: 'center',
    flex:0.5,
    //justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: 50,
    paddingLeft: 30,
  },
  menuItemBlankSpace:{
    flex:6,
    width: Dimensions.get('window').width,
    height: 50,
  },
  menuItemFooter:{
    flex:3,
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: '#e4e4e4',
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText:{
    fontFamily: 'Avenir',
    fontSize: 15,
    color: '#FF8217',
  }
}); 

