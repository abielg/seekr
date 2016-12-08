import {
  createRouter,
} from '@exponent/ex-navigation';

import SignupScreen from '../screens/SignupScreen';
import SplashScreen from '../screens/SplashScreen';
import ProfileReadyScreen from '../screens/ProfileReadyScreen';
import PaymentScreen from '../screens/PaymentScreen';
import LocalFeed from '../screens/LocalFeed';

export default createRouter(() => ({
  signup: () => SignupScreen,
  splashScreen: () => SplashScreen,
  profileReadyScreen: () => ProfileReadyScreen,
  paymentScreen: () => PaymentScreen,
  localFeed: () => LocalFeed,
}));
