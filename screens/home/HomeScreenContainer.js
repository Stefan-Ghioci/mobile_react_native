import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

// fetch('http://192.168.0.102:8080/mobileapps/games', {
//   method: 'GET'
// })
//   .then(response => response.json())
//   .then(responseJSON => console.log(responseJSON))
//   .catch(error => console.log(error));
const HomeScreenContainer = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreenContainer;
