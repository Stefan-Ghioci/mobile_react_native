import { StyleSheet } from 'react-native';
import { blue, darkBlue } from '../../../../utils';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  chart: {
    borderRadius: 5
  },
  chartWidth: 325,
  chartHeight: 400
});

export const chartConfig = {
  backgroundGradientFrom: blue,
  backgroundGradientTo: darkBlue,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
};
