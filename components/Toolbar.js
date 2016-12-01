import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Toolbar extends React.Component{
    render() {
        return (
          <View>
            <View style={styles.toolbar}>
              <Text style={styles.toolbarButton}>{this.props.left}</Text>
              <Text style={styles.toolbarTitle}>{this.props.title}</Text>
              <Text style={styles.toolbarButton}>{this.props.right}</Text>
          </View>
          </View>
        );
    }
}

var styles = StyleSheet.create({
  toolbar:{
    backgroundColor:'#fff',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row',
  },
  toolbarButton:{
    width: 50,
    color:'#000',
    textAlign:'center',
  },
  toolbarTitle:{
    color:'#000',
    textAlign:'center',
    fontWeight:'bold',
    flex:1 ,
  }
});