import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { styles } from './SignInScreenStyles';

const SignInScreenView = ({ onSignIn, onGoToSignUp }) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder='Enter your email address'
        leftIcon={{ type: 'material', name: 'email' }}
      />
      <Input
        placeholder='Enter your password'
        leftIcon={{ type: 'material', name: 'lock' }}
        secureTextEntry
      />
      <Button title='Sign In' onPress={onSignIn} />
      <Button
        buttonStyle={styles.secondaryButton}
        titleStyle={styles.secondaryButtonTitle}
        type='outline'
        title='Create a new account'
        onPress={onGoToSignUp}
      />
    </View>
  );
};

export default SignInScreenView;
