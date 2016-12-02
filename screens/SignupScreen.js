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

import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
} from 'react-native-form-generator';

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
              <Text style={{marginBottom: 20, marginTop: 10}}>Profile Picture</Text>
            </View>
            <TextLabelInput label='Name' placeholder='Johnny Appleseed' />
            <TextLabelInput label='Birthday' placeholder='MM/DD/YYYY' />
            <TextLabelInput label='Hometown' placeholder='United States' />
            <TextLabelInput label='Language' placeholder='English' />
            <TextLabelInput label='Text Bio' placeholder='Tell us about yourself.' />
          </View>
          <View style={styles.gutter}/>
        </View>

        <View>
          <Hr lineColor='#b3b3b3'/>
        </View>

        <View style={styles.container}>
          <View style={styles.gutter}/>
          <View style={styles.mainColumn}>
            <Text style={styles.subtitle}>Tell Us What Experiences You Seek</Text>
            
            <View style={styles.gridRowContainer}>
            <InterestButton title='Soccer' />
            <InterestButton title='Food' />
            <InterestButton title='Arson' />
            </View>
            
            <View style={styles.gridRowContainer}>
            <InterestButton title='Soccer' />
            <InterestButton title='Food' />
            <InterestButton title='Arson' />
            </View>

            <View style={styles.gridRowContainer}>
            <InterestButton title='Soccer' />
            <InterestButton title='Food' />
            <InterestButton title='Arson' />
            </View>

            <View style={styles.gridRowContainer}>
            <InterestButton title='Soccer' />
            <InterestButton title='Food' />
            <InterestButton title='Arson' />
            </View>

          </View>
          <View style={styles.gutter}/>
        </View>

        <View>
          <Hr lineColor='#b3b3b3'/>
        </View>

        <Button title='Continue' action={this._goToPayments}/>

      </ScrollView>
    );
  }

  _goToPayments = () => {
    console.log("Hello world");
    this.props.navigator.push(Router.getRoute('paymentScreen'));
  }
}

const styles = StyleSheet.create({
  gridRowContainer: {
    flexDirection: 'row',
  },

  mainColumn: {
    flex: 7,
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
  }
});