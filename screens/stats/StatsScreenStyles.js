import { StyleSheet } from 'react-native';
import { blue, darkBlue } from '../../utils';

export const styles = StyleSheet.create({
  title:{
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  body: {
    flex: 12,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  footer: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  button: {
    width: 175
  },
  chart: {
    borderRadius: 7
  },
  chartWidth: 375,
  chartHeight: 400
});

export const chartConfig = {
  backgroundGradientFrom: blue,
  backgroundGradientTo: darkBlue,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
};
