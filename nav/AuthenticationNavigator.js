import { createStackNavigator } from 'react-navigation-stack';
import { SignInScreen, SignUpScreen } from '../screens';
export const AuthenticationNavigator = createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});
