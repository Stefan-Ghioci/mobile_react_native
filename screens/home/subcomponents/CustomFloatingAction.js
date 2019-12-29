import React from 'react';
import { FloatingAction } from 'react-native-floating-action';
import { Icon } from 'react-native-elements';

const CustomFloatingAction = () => {
  const actions = [
    {
      text: 'Add New Game',
      icon: <Icon name='playlist-add' color='white' />,
      color: '#dc3722',
      buttonSize: 56,
      margin: 0
    },
    {
      text: 'Show Stats',
      icon: <Icon name='timeline' color='white' />,
      color: '#dc3722',
      buttonSize: 56,
      margin: 0
    }
  ];

  const handleItemPressed = name => {
    console.log('name');
  };

  return (
    <FloatingAction
      actions={actions}
      onPressItem={handleItemPressed}
      color='#dc3722'
    />
  );
};

export default CustomFloatingAction;
