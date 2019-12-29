import moment from 'moment';
import Snackbar from 'react-native-snackbar';

export const showSuccess = message =>
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: 'green'
  });

export const formatDate = date => moment(date).format('DD MMM, YYYY');

export const formatDouble = value => (Math.round(value * 10) / 10).toString();
