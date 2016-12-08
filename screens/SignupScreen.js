import Exponent from 'exponent';
import React from 'react';
import Toolbar from '../components/Toolbar';
import TextLabelInput from '../components/TextLabelInput';
import Router from '../navigation/Router';
//import DatePicker from '../components/DatePicker';
//import DatePicker2 from '../components/DatePicker2';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  DatePickerIOS,
} from 'react-native';

import Hr from 'react-native-hr';
import InterestButton from '../components/InterestButton';
import Button from '../components/Button';

export default class SignupScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.jumboContainer}>
        <View style={styles.container}>
          <View style={styles.gutter}/>
          <View style={styles.mainColumn}>
            <Toolbar navigator={this.props.navigator} left='<' title='Build Your Profile' />
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.addPic}>
                <Text style={{fontSize:40}}>+</Text>
              </TouchableOpacity>
              <Text style={{marginBottom: 20, marginTop: 10, color:'#FF8217'}}>Profile Picture</Text>
            </View>
            <TextLabelInput label='Name' placeholder='Johnny Appleseed' height={30} />
            <TextLabelInput label='Birthday' placeholder='MM/DD/YYYY' height={30} />
            <TextLabelInput label='Hometown' placeholder='United States' height={30} />
            <TextLabelInput label='Language' placeholder='English' height={30} />
            <TextLabelInput label='Text Bio' placeholder='Tell us about yourself.' height={90} />
          </View>
          <View style={styles.gutter}/>
        </View>

        <View style={{margin: 20}}>
          <Hr lineColor='#C5C2C2'/>
        </View>

        <View style={styles.container}>
          <View style={styles.gutter}/>
          <View style={styles.mainColumn}>
            <Text style={styles.subtitle}>Tell us what experiences you seek!</Text>
            
            <View style={styles.gridRowContainer}>
            <InterestButton title='Soccer' />
            <InterestButton title='Food' />
            <InterestButton title='Shopping' />
            </View>
            
            <View style={styles.gridRowContainer}>
            <InterestButton title='Photography' />
            <InterestButton title='Museums' />
            <InterestButton title='Nightlife' />
            </View>

            <View style={styles.gridRowContainer}>
            <InterestButton title='Outdoors' />
            <InterestButton title='Sightsee' />
            <InterestButton title='Arts' />
            </View>

            <View style={styles.gridRowContainer}>
            <InterestButton title='Sailing' />
            <InterestButton title='College' />
            <InterestButton title='Tennis' />
            </View>

          </View>
          <View style={styles.gutter}/>
        </View>

        <Button title='Continue' action={this._goToPayments}/>

      </ScrollView>
    );
  }

  _goToPayments = () => {
    this.props.navigator.push(Router.getRoute('paymentScreen'));
  }
}

const styles = StyleSheet.create({
  gridRowContainer: {
    flexDirection: 'row',
  },

  mainColumn: {
    flex: 8,
  },
  gutter: {
    flex: 1,
  },
  container: {
    //flex: 1,
    flexDirection: 'row',
  },
  jumboContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  addPic: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#FF8217',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle : {
    fontSize: 18,
    fontFamily: 'Avenir',
    marginBottom: 20,
    fontWeight: 'bold'
  }
});