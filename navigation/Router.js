import {
  createRouter,
} from '@exponent/ex-navigation';

import SignupScreen from '../screens/SignupScreen';
import SplashScreen from '../screens/SplashScreen';
import ProfileReadyScreen from '../screens/ProfileReadyScreen';
import PaymentScreen from '../screens/PaymentScreen';
<<<<<<< HEAD
import LocalFeed from '../screens/LocalFeed';
=======
import EmptyScreen from '../screens/EmptyScreen';
>>>>>>> 0c8117a004c1d906ea6169f59cffddd174d8bdd7

export default createRouter(() => ({
  signup: () => SignupScreen,
  splashScreen: () => SplashScreen,
  profileReadyScreen: () => ProfileReadyScreen,
  paymentScreen: () => PaymentScreen,
  localFeed: () => LocalFeed,
  emptyScreen: () => EmptyScreen,
}));
