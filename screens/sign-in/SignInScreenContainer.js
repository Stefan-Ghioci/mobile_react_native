import React from 'react';
import { View } from 'react-native';
import SignInScreenView from './SignInScreenView';
import { SIGN_IN_URL } from '../../api';
import Axios from 'axios';
import { showError } from '../../utils';

const SignInScreenContainer = props => {
  const handleSignIn = (email, password) => {
    console.log('Signing in ...');
    Axios.post(SIGN_IN_URL, { email, password }, { timeout: 2000 })
      .then(() => {
        console.log('Sign in success, redirecting to Home screen ...');
        props.navigation.navigate('Home');
      })
      .catch(error => {
        if (error.response && error.response.status === 403) {
          console.log(error);
          showError('The email or password you entered are not valid');
        } else {
          console.log('Cannot connect to server');
          showError('An error occurred while sending data to the server');
        }
      });
  };

  const goToSignUp = () => {
    props.navigation.navigate('SignUp');
  };

  return (
    <View style={{ flex: 1 }}>
      <SignInScreenView onGoToSignUp={goToSignUp} signIn={handleSignIn} />
    </View>
  );
};

export default SignInScreenContainer;
