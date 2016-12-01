import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Required Props:
// navigator

// TODO: Click handlers need to be refactored!
export default class Toolbar extends React.Component{
    render() {
        return (
          <View>
            <View style={styles.toolbar}>
              <Text style={styles.toolbarButton} onPress={this._goBack}>
                {this.props.left}
              </Text>
              <Text style={styles.toolbarTitle}>{this.props.title}</Text>
              <Text style={styles.toolbarButton}>{this.props.right}</Text>
          </View>
          </View>
        );
    }
    _goBack = () => {
      this.props.navigator.pop();
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