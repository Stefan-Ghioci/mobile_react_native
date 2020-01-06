import React, { useState } from 'react';
import { Button, Input } from 'react-native-elements';
import { View } from 'react-native';
import { styles } from './SignUpScreenStyles';
import { emailRegex } from '../../utils';

const SignUpScreenView = ({ signUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validate = () => {
    let valid = true;

    if (email.match(emailRegex) === [] || email.match(emailRegex) === null) {
      valid = false;
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }

    if (password.length < 8) {
      valid = false;
      setPasswordError('Password must be at least 8 characters');
    } else {
      setPasswordError('');
    }

    if (!valid) return;

    signUp(email, password);
  };

  return (
    <View style={styles.container}>
      <Input
        onChangeText={setEmail}
        value={email}
        placeholder='Enter your email address'
        leftIcon={{ type: 'material', name: 'email' }}
        errorMessage={emailError}
      />
      <Input
        onChangeText={setPassword}
        value={password}
        placeholder='Enter a new password'
        leftIcon={{ type: 'material', name: 'lock' }}
        secureTextEntry
        errorMessage={passwordError}
      />
      <Button title='Sign Up' onPress={validate} />
    </View>
  );
};

export default SignUpScreenView;
