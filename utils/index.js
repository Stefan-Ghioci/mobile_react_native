import moment from 'moment';
import Snackbar from 'react-native-snackbar';

export const showSuccess = message =>
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: 'green'
  });

export const showError = message =>
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: 'red'
  });

export const formatDate = date => moment(date).format('DD MMM, YYYY');

export const formatDouble = value => (Math.round(value * 10) / 10).toString();

export const blue = '#64b5f6';
export const darkBlue = '#2475b6';
export const red = '#dc3722';
export const darkRed = '#bc0702';

export const imageUrlRegex = '(https?:\/\/.*\.(?:png|jpg))';

export const emailRegex = '[^@]+@[^.]+..+';
