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

var screenWidth = Dimensions.get('window').width;
console.log(screenWidth)

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
          <TouchableOpacity style={styles.bigcontainer} onPress={this.props.action}>
            <View style={styles.container}>
              <View style={styles.topSection}>
                <View style={styles.picSection}>
                  <Image
                    source={this.props.pic}
                    style={styles.pic}
                  />
                </View>
                <View style={styles.descriptionSection}>
                  <Text style={styles.name}>{this.props.name}</Text>
                  <Text style={styles.bio}>{this.props.bio}</Text>
                  <Text style={styles.age}>{this.props.age}</Text>
                </View>
              </View>
              <View style={styles.bottomSection}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.seeking}>Seeking:</Text>
                  <View style={{flexDirection: 'row', flex: 1, left:10}}>
                    {this._renderStars()}
                  </View>
                </View>
                <View style={styles.footer}>
                  <Text style={styles.interests}>{this.props.interests}</Text>
                  <Text style={styles.numReviews}>{this.props.reviewsNum} reviews</Text>
                </View>
              </View>
            </View>
            <View style={styles.rightGutter}>
              <Text style={{color:'#DAD8D8', right: 5, fontSize: 18}}>></Text>
            </View>
          </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
  bigcontainer : {
    backgroundColor: '#F3F3F3',
    height: 140,
    flexDirection: 'row',
    marginTop: 15,
    borderWidth:1,
    borderColor:'#E4E4E4'
  },
  container : {
    flex: 18,
  },
  rightGutter : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topSection : {
    flex: 4,
    flexDirection: 'row',
  },
  bottomSection: {
    flex: 2,
  },
  picSection : {
    flex: 3,
  },
  descriptionSection : {
    flex: 7
  },
  pic : {
    height: screenWidth * .25,
    width: screenWidth * .25,
    margin: 5,
    borderRadius: (screenWidth * .25) / 2.0,
    borderWidth: 1,
    borderColor: '#FF8217',
  }, 
  name : {
    fontSize: 18,
    fontFamily: 'Avenir',
    marginTop: 5,
    marginLeft: 10
  },
  bio : {
    fontSize: 11,
    fontFamily: 'Avenir',
    marginLeft: 10
  },
  age : {
    fontSize: 10,
    fontFamily: 'Avenir',
    marginLeft: 10,
  },
  seeking : {
    fontSize: 10,
    fontFamily: 'Avenir',
    marginLeft: 10,
    marginTop: 10,
    flex: 2
  },
  interests : {
    fontSize: 10,
    fontFamily: 'Avenir',
    marginLeft: 10,
    color: '#FF8218',
    flex: 2
  },
  stars : {
    height: 15,
    width: 15,
    top: 10
  }, 
  footer : {
    flexDirection: 'row',
  },
  numReviews : {
    fontSize: 10,
    fontFamily: 'Avenir',
    right: 30
  }
});