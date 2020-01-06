import { StyleSheet } from 'react-native';
import { blue, darkBlue, red, darkRed } from '../../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: darkBlue,
    marginBottom: 20
  },
  title: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold'
  },
  body: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  footer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  button: {
    width: 150
  },
  chart: {
    borderRadius: 5
  },
  chartWidth: 325,
  chartHeight: 400
});

export const chartConfig = {
  backgroundGradientFrom: red,
  backgroundGradientTo: red,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
};
