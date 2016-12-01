import Exponent from 'exponent';
import React from 'react';
import SplashScreen from './screens/SplashScreen';
import SignupScreen from './screens/SignupScreen';
import Router from './navigation/Router';
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
          <StackNavigation id="root" initialRoute={Router.getRoute('splashScreen')} />
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
