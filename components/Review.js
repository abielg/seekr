import Exponent from 'exponent';
import React from 'react';
import Dimensions from 'Dimensions';
import Router from '../navigation/Router';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Button extends React.Component{

  _renderStars() {
    count = 1;
    result = [];
    while (count <= 5){
      if (count <= parseInt(this.props.numStars)){
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
          </View>
        );
    }
}

var styles = StyleSheet.create({

});