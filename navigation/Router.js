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
import FindingScreen from '../screens/FindingScreen';
import MainMap from '../screens/MainMap';
import TimerScreen from '../screens/TimerScreen';
import AcceptedScreen from '../screens/AcceptedScreen';
import OnTheWay from '../screens/OnTheWay';
import TripPlayback from '../screens/TripPlayback';

export default createRouter(() => ({
  signup: () => SignupScreen,
  splashScreen: () => SplashScreen,
  profileReadyScreen: () => ProfileReadyScreen,
  paymentScreen: () => PaymentScreen,
  localFeed: () => LocalFeed,
  emptyScreen: () => EmptyScreen,
  localProfile: () => LocalProfile,
  rateTripScreen: () => RateTripScreen,
  FindingScreen: () => FindingScreen,
  MainMap: () => MainMap,
  TimerScreen: () => TimerScreen,
  AcceptedScreen: () => AcceptedScreen,
  OnTheWay: () => OnTheWay,
  TripPlayback: () => TripPlayback,
}));
