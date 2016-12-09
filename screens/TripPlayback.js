import React from 'react';
import {
  Text,
  View,
  LayoutAnimation,
  Alert,
  ScrollView
} from 'react-native';
 import {DragContainer, Draggable, DropZone} from 'react-native-drag-drop'


export default class TripPlayback extends React.Component {
  componentWillReceiveProps({dragOver}) {
    if (dragOver !== this.props.dragOver) LayoutAnimation.easeInEaseOut();
  }
  render() {
    return <View style={{width: this.props.dragOver ? 110 : 100, height:  this.props.dragOver ? 110 : 100, backgroundColor: '#ddd', alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text>{"LET GO"}</Text>
      </View>
    </View>
  }
}