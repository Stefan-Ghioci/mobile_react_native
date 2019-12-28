import React from 'react';
import { Avatar, Text } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';

export const RatingAvatar = ({ value }) => {
  let color = 'green';
  if (value < 4.0) color = 'yellow';
  if (value < 3.0) color = 'red';

  return (
    <Avatar
      size='medium'
      overlayContainerStyle={{ backgroundColor: color }}
      title={(Math.round(value * 10) / 10).toString()}
    />
  );
};

export const TextLoadingIndicator = props => {
  return (
    <>
      <ActivityIndicator style={{ paddingTop: 20 }} size='large' color='blue' />
      <Text style={{ alignSelf: 'center', paddingTop: 20 }}>
        {props.message}
      </Text>
    </>
  );
};
