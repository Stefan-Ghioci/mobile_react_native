import { StyleSheet } from 'react-native';
import { red } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  body: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 20
  },
  label: {
    color: '#888',
    fontSize: 16,
    fontWeight: 'bold'
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 3
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
  secondaryButton: {
    width: 150,
    borderColor: red,
    borderWidth: 1
  },
  secondaryButtonTitle: {
    color: red
  }
});
