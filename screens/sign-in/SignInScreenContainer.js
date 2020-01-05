import React from 'react';
import { View } from 'react-native';
import SignInScreenView from './SignInScreenView';

const SignInScreenContainer = props => {
  //TODO: finish sign in!

  const handleSignIn = () => {
    props.navigation.navigate('Home');
  };

  const goToSignUp = () => {
    props.navigation.navigate('SignUp');
  };

  return (
    <View style={{ flex: 1 }}>
      <SignInScreenView onGoToSignUp={goToSignUp} onSignIn={handleSignIn} />
    </View>
  );
};

export default SignInScreenContainer;
