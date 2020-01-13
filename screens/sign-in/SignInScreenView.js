import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { styles } from './SignInScreenStyles';

const SignInScreenView = ({ signIn, onGoToSignUp, offline }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Input
        onChangeText={setEmail}
        value={email}
        placeholder='Enter your email address'
        leftIcon={{ type: 'material', name: 'email' }}
      />
      <Input
        onChangeText={setPassword}
        value={password}
        placeholder='Enter your password'
        leftIcon={{ type: 'material', name: 'lock' }}
        secureTextEntry
      />
      <Button title='Sign In' onPress={() => signIn(email, password)} />
      <Button type='outline' title='Offline Mode' onPress={offline} />
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
