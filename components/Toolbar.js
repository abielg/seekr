import Exponent from 'exponent';
import React from 'react';
import Hamburger from '../components/Hamburger';
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
              {this.props.left !== 'Hamburger'  &&
              <Text style={styles.toolbarButton} onPress={this._goBack}>
                {this.props.left}
              </Text>}

              {this.props.left === 'Hamburger'  &&
              <View style={styles.toolbarIcon}>
                <View style={styles.toolbarIconPadding} />
                <Hamburger active={false} onPress={this.props.onPress}/>
              </View>}

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
  toolbarIcon:{
   flexDirection:'row',
  },
  toolbarIconPadding:{
    paddingRight: 10,
  },
  toolbarButton:{
    width: 50,
    color:'#000',
    textAlign:'center',
    fontSize: 16,
  },
  toolbarTitle:{
    color:'#000',
    textAlign:'center',
    flex:1 ,
    fontFamily: 'Avenir',
    fontSize: 20,
  }
});