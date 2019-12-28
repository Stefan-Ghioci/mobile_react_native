import React from 'react';
import { Input, Button } from 'react-native-elements';
import { View } from 'react-native';
import { styles } from './SignInScreenStyles';

const SignInScreenContainer = props => {
  //TODO: finish sign in!

  const handleSignIn = () => {
    props.navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1 }}>
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
        <Button title='Sign In' onPress={handleSignIn} />
        <Button
          type='outline'
          title='Create a new account'
          onPress={() => props.navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignInScreenContainer;
