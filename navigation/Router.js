import {
  createRouter,
} from '@exponent/ex-navigation';

import SignupScreen from '../screens/SignupScreen';
import SplashScreen from '../screens/SplashScreen';

export default createRouter(() => ({
  signup: () => SignupScreen,
  splashScreen: () => SplashScreen,
}));
