import React from 'react';
import { Button, Input } from 'react-native-elements';
import { View } from 'react-native';
import { styles } from './SignUpScreenStyles';

const SignUpScreenView = props => {
  return (
    <View style={styles.container}>
      <Input
        placeholder='Enter your email address'
        leftIcon={{ type: 'material', name: 'email' }}
      />
      <Input
        placeholder='Enter a new password'
        leftIcon={{ type: 'material', name: 'lock' }}
        secureTextEntry
      />
      <Button title='Sign Up' onPress={props.onSubmit} />
    </View>
  );
};

export default SignUpScreenView;
