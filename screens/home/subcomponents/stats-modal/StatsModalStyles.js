import { StyleSheet } from 'react-native';
import { blue, darkBlue } from '../../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: blue,
    borderWidth: 1,
    marginHorizontal: 22,
    marginVertical: 15,
    borderRadius: 5
  },
  title: {
    color: darkBlue
  },
  body: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  footer: {
    flex: 1,
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
  backgroundGradientFrom: blue,
  backgroundGradientTo: darkBlue,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
};
