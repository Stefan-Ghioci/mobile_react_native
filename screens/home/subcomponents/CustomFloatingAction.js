import React from 'react';
import { FloatingAction } from 'react-native-floating-action';
import { Icon } from 'react-native-elements';

const CustomFloatingAction = ({onPressItem}) => {
  const actions = [
    {
      text: 'Add New Game',
      name: 'bt_add_game',
      icon: <Icon name='playlist-add' color='white' />,
      color: '#dc3722'
    },
    {
      text: 'Show Stats',
      name: 'bt_stats',
      icon: <Icon name='timeline' color='white' />,
      color: '#dc3722'
    }
  ];


  return (
    <FloatingAction
      actions={actions}
      onPressItem={onPressItem}
      color='#dc3722'
    />
  );
};

export default CustomFloatingAction;
