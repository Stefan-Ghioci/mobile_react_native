import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { HomeScreen, AddGameScreen, StatsScreen } from '../screens';

export default createAnimatedSwitchNavigator({
  Home: HomeScreen,
  AddGame: AddGameScreen,
  Stats: StatsScreen
});
