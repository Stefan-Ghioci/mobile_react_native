import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthenticationNavigator from './AuthenticationNavigator';
import { HomeScreen } from '../screens';

const AppNavigator = createSwitchNavigator({
  /*
   * Rather than being rendered by a screen component, the
   * AuthenticationNavigator is a screen component
   */
  Auth: AuthenticationNavigator,
  Home: HomeScreen
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
