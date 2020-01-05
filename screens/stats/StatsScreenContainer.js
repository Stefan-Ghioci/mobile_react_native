import React from 'react';
import { Button } from 'react-native-elements';
import { View } from 'react-native';

const StatsScreenContainer = props => {
  return (
    <View>
      <Button
        title='Go Back'
        type='outline'
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default StatsScreenContainer;
