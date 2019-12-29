import React from 'react';
import { View } from 'react-native';
import SignUpScreenView from './SignUpScreenView';
import { showSuccess } from '../../utils';

const SignUpScreenContainer = props => {
  //TODO: finish sign up!

  const handleSignUp = () => {
    showSuccess('Account created successfully');
    props.navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <SignUpScreenView onSubmit={handleSignUp} />
    </View>
  );
};

export default SignUpScreenContainer;
