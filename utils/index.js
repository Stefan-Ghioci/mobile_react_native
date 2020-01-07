import moment from 'moment';
import Snackbar from 'react-native-snackbar';
import email from 'react-native-email';

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

export const imageUrlRegex = '(https?://.*.(?:png|jpg))';

export const emailRegex = '[^@]+@[^.]+..+';

const formatGame = game =>
  'Game Title: ' +
  game.name +
  '\n' +
  'Rating: ' +
  game.rating +
  '\n' +
  'Release Date: ' +
  formatDate(game.date) +
  '\n';

export const sendEmail = data => {
  const subject = 'Mobile App: Video Games List';
  let body = '';
  data.forEach(e => (body += formatGame(e) + '\n'));

  console.log('Email content:');
  console.log('subject: ' + subject);
  console.log('body: ' + body);

  console.log('Sending ...');

  email([], { subject: subject, body: body })
    .then(() => {
      console.log('Opening email app...');
    })
    .catch(error => {
      console.log(error);
      showError('An error occurred');
    });
};
