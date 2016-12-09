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
import TripPlayback from '../screens/TripPlayback';
import FindingScreen from '../screens/FindingScreen';
import MainMap from '../screens/MainMap';
import TimerScreen from '../screens/TimerScreen';
import AcceptedScreen from '../screens/AcceptedScreen';
import OnTheWay from '../screens/OnTheWay';
import TripSummaryScreen from '../screens/TripSummaryScreen';
import TouristFeed from '../screens/TouristFeed';
import OnTrip from '../screens/OnTrip';
import localSignup from '../screens/localSignup';
import TripLog from '../screens/TripLog';
import MenuView from '../components/MenuView';
import TouristProfile from '../screens/TouristProfile';

export default createRouter(() => ({
  signup: () => SignupScreen,
  splashScreen: () => SplashScreen,
  profileReadyScreen: () => ProfileReadyScreen,
  paymentScreen: () => PaymentScreen,
  localFeed: () => LocalFeed,
  emptyScreen: () => EmptyScreen,
  localProfile: () => LocalProfile,
  rateTripScreen: () => RateTripScreen,
  tripPlayback: () => TripPlayback,
  FindingScreen: () => FindingScreen,
  MainMap: () => MainMap,
  TimerScreen: () => TimerScreen,
  AcceptedScreen: () => AcceptedScreen,
  OnTheWay: () => OnTheWay,
  tripSummaryScreen: () => TripSummaryScreen,
  touristFeed: () => TouristFeed,
  TripPlayback: () => TripPlayback,
  OnTrip: () => OnTrip,
  localSignup: () => localSignup,
  TripLog: () => TripLog,
  MenuView: () => MenuView,
  touristProfile: () => TouristProfile,
}));
