import React from 'react';
import { View } from 'react-native';
import SignUpScreenView from './SignUpScreenView';
import { showSuccess, showError } from '../../utils';
import Axios from 'axios';
import { SIGN_UP_URL } from '../../api';

const SignUpScreenContainer = props => {
  const handleSignUp = (email, password) => {
    Axios.post(SIGN_UP_URL, { email, password }, { timeout: 2000 })
      .then(() => {
        showSuccess('Account created successfully');
        props.navigation.goBack();
      })
      .catch(error => {
        if (error.response && error.response.status === 400)
          showError('An user with this email already exists');
        else showError('An error occurred while sending data to the server');
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <SignUpScreenView signUp={handleSignUp} />
    </View>
  );
};

export default SignUpScreenContainer;
