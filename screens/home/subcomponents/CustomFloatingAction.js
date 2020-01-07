import React from 'react';
import { FloatingAction } from 'react-native-floating-action';
import { Icon } from 'react-native-elements';
import { red } from '../../../utils';

const CustomFloatingAction = ({ onPressItem }) => {
  const actions = [
    {
      text: 'Add New Game',
      name: 'bt_add_game',
      icon: <Icon name='playlist-add' color='white' />,
      color: red
    },
    {
      text: 'Show Stats',
      name: 'bt_stats',
      icon: <Icon name='timeline' color='white' />,
      color: red
    },
    {
      text: 'Share with email',
      name: 'bt_email',
      icon: <Icon name='email' color='white' />,
      color: red
    }
  ];

  return (
    <FloatingAction actions={actions} onPressItem={onPressItem} color={red} />
  );
};

export default CustomFloatingAction;
