import React, { useCallback } from 'react';
import { View } from 'react-native';
import SignInScreenView from './SignInScreenView';
import { SIGN_IN_URL } from '../../api';
import Axios from 'axios';
import { showError } from '../../utils';
import { useStore } from '../../store';

const SignInScreenContainer = props => {
  const { state, dispatch } = useStore();
  const login = useCallback(() => dispatch({ type: 'login' }), [dispatch]);

  const handleSignIn = (email, password) => {
    console.log('Signing in ...');
    Axios.post(SIGN_IN_URL, { email, password }, { timeout: 5000 })
      .then(() => {
        console.log(
          'Sign in success as ' + email + ', redirecting to Home screen ...'
        );
        login();
        console.log(state);
        props.navigation.navigate('Home');
      })
      .catch(error => {
        if (error.response && error.response.status === 403) {
          console.log(error);
          showError('The email or password you entered are not valid');
        } else {
          console.log('Cannot connect to server');
          console.log(error.response);
          showError('An error occurred while sending data to the server');
        }
      });
  };

  const goToSignUp = () => {
    console.log('Opening Sign Up menu...');
    props.navigation.navigate('SignUp');
  };

  const handleOfflineMode = () => {
    console.log('Entering Offline Mode...');
    props.navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1 }}>
      <SignInScreenView
        onGoToSignUp={goToSignUp}
        signIn={handleSignIn}
        offline={handleOfflineMode}
      />
    </View>
  );
};

export default SignInScreenContainer;
