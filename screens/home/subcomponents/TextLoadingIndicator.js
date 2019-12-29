import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';

const TextLoadingIndicator = ({ message }) => {
  return (
    <>
      <ActivityIndicator style={{ paddingTop: 20 }} size='large' color='blue' />
      <Text style={{ alignSelf: 'center', paddingTop: 20 }}>{message}</Text>
    </>
  );
};

export default TextLoadingIndicator;
