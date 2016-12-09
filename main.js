import Exponent from 'exponent';
import React from 'react';
import SplashScreen from './screens/SplashScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileReadyScreen from './screens/ProfileReadyScreen';
import FindingScreen from './screens/FindingScreen';
import Router from './navigation/Router';
import MainMap from './screens/MainMap';
import TimerScreen from './screens/TimerScreen';
import AcceptedScreen from './screens/AcceptedScreen';
import OnTheWay from './screens/OnTheWay';
import TripPlayback from './screens/TripPlayback';
import TripLog from './screens/TripLog';

import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class AppContainer extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <NavigationProvider router={Router}>
          <StackNavigation id="root" initialRoute={Router.getRoute('TimerScreen')} />
        </NavigationProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Exponent.registerRootComponent(AppContainer);