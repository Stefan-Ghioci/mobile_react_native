import { StyleSheet } from 'react-native';
import { red } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    height: 330,
    justifyContent: 'space-evenly',
    padding: 20
  },
  secondaryButton: {
    borderColor: red,
    borderWidth: 1
  },
  secondaryButtonTitle: {
    color: red
  }
});
