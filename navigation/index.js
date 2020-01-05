import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import AuthenticationNavigator from './AuthenticationNavigator';
import HomeNavigator from './HomeNavigator';

const AppNavigator = createAnimatedSwitchNavigator({
  Auth: AuthenticationNavigator,
  Home: HomeNavigator
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
