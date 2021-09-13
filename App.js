import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SigninScreen from './src/screens/SigninScreen';
import ForgotScreen from './src/screens/ForgotScreen';
import OTPScreen from './src/screens/OTPScreen';
import SignupScreen from './src/screens/SignupScreen';
import CreateNewPasswordScreen from './src/screens/CreateNewPasswordScreen';

const navigator = createStackNavigator(
  {

    Signin: SigninScreen,
    Forgot: ForgotScreen,
    Otp: OTPScreen,
    Signup: SignupScreen,
    Newpassword: CreateNewPasswordScreen,

  },
    {
      initialRouteName: 'Signin',
      defaultNavigationOptions: {
      title: 'Digital Therapy',

    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};
