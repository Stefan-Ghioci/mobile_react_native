import { createStackNavigator } from 'react-navigation-stack';
import { SignInScreen, SignUpScreen } from '../screens';

export default createStackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: { title: 'Sign in to your account' }
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: { title: 'Create a new account' }
  }
});
