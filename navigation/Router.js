import {
  createRouter,
} from '@exponent/ex-navigation';

import SignupScreen from '../screens/SignupScreen';
import SplashScreen from '../screens/SplashScreen';
import ProfileReadyScreen from '../screens/ProfileReadyScreen';
import PaymentScreen from '../screens/PaymentScreen';
import LocalFeed from '../screens/LocalFeed';
import EmptyScreen from '../screens/EmptyScreen';
import LocalProfile from  '../screens/LocalProfile';
import RateTripScreen from '../screens/RateTripScreen';

export default createRouter(() => ({
  signup: () => SignupScreen,
  splashScreen: () => SplashScreen,
  profileReadyScreen: () => ProfileReadyScreen,
  paymentScreen: () => PaymentScreen,
  localFeed: () => LocalFeed,
  emptyScreen: () => EmptyScreen,
  localProfile: () => LocalProfile,
  rateTripScreen: () => RateTripScreen,
}));
