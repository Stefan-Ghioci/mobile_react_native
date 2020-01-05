import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from './AddGameScreenStyles';

const AddGameScreenContainer = props => {
  return (
    <View style={{ flex: 1 }}>
      <Button
        title='Cancel'
        buttonStyle={styles.secondaryButton}
        titleStyle={styles.secondaryButtonTitle}
        type='outline'
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default AddGameScreenContainer;
