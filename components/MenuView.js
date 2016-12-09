import Exponent from 'exponent';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toolbar from '../components/Toolbar';
import Router from '../navigation/Router';
import ProfileCard from '../components/ProfileCard';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

export default class MenuView extends React.Component {
  constructor(props) {
    super(props);
    console.log("IS LOCAL:"+this.props.statusIsLocal)
    this.state = { statusIsLocal: this.props.statusIsLocal};
  }

  _changeStatus(pressed){
    if ((this.state.statusIsLocal && pressed != 'local')){
      this.props.navigator.push(Router.getRoute('MainMap'));
      //this.setState({ statusIsLocal: !this.state.statusIsLocal });
    } else if ((!this.state.statusIsLocal && pressed != 'tourist')){
      this.props.navigator.push(Router.getRoute('touristFeed'));
    }
  }
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
            <TouchableOpacity onPress={this.goToEdit}>
              <Text style={styles.miniText}> 
                Edit Profile 
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line}/>
          <TouchableOpacity style={styles.menuItem} onPress = {this._goToPayments}>
           <Icon style={{paddingRight:10}} name="money" size={25} color="#FFF" />
           <Text style={styles.text}> Payments </Text>
          </TouchableOpacity>
          <View style={styles.line}/>
          <TouchableOpacity style={styles.menuItem} onPress = {this.goToTrips}>
            <Icon style={{paddingRight:10}} name="map" size={25} color="#FFF" />
           <Text style={styles.text}>  Trips </Text>
          </TouchableOpacity>
          <View style={styles.line}/>
          <TouchableOpacity style={styles.menuItem} onPress = {this.goToSettings}>
            <Icon style={{paddingRight:10}} name="gear" size={25} color="#FFF" />
           <Text style={styles.text}> Settings </Text>
          </TouchableOpacity>
          <View style={styles.line}/>
          <View style={styles.menuItemBlankSpace} />
          <View style={styles.menuItemFooter}>
            <View style={styles.buttonView}> 
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={this.state.statusIsLocal ? styles.buttonSelected : styles.buttonUnselected} onPress={this._changeStatus.bind(this, 'local')}>
                  <Text style={this.state.statusIsLocal ? styles.textSelected : styles.textUnselected}>Local</Text>
                </TouchableOpacity>
                <TouchableOpacity style={this.state.statusIsLocal ? styles.buttonUnselected : styles.buttonSelected} onPress={this._changeStatus.bind(this, 'tourist')}>
                  <Text style={this.state.statusIsLocal ? styles.textUnselected : styles.textSelected}>Tourist</Text>
                </TouchableOpacity>
              </View>
            </View>  
          </View>
        </View>
      </View>

    );
  }
  _goToPayments = () => {
    this.props.navigator.push(Router.getRoute('paymentScreen'));
  }

  goToTrips = () => {
    this.props.navigator.push(Router.getRoute('TripLog'));
  }

  goToSettings = () => {
    this.props.navigator.push(Router.getRoute('settings'));
  }

  goToEdit = () => {
    this.props.navigator.push(Router.getRoute('signup'));
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
    paddingTop: 5,
    paddingBottom: 5
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
    width: Dimensions.get('window').width * 0.70,
    height: 50,
    backgroundColor: '#e4e4e4',
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerText:{
    fontFamily: 'Avenir',
    fontSize: 15,
    color: '#FF8217',
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
    alignItems: 'center',
    right: 15
  }
}); 

