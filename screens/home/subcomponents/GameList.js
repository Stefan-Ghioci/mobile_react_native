import React from 'react';
import { ListItem } from 'react-native-elements';
import formatDate from '../../../utils';
import { Avatar } from 'react-native-elements';

const RatingAvatar = ({ value }) => {
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

const GameList = ({ list }) => {
  return list.map((e, i) => (
    <ListItem
      key={i}
      leftAvatar={<RatingAvatar value={e.rating} />}
      title={e.name}
      rightTitle={formatDate(e.date)}
      bottomDivider
    />
  ));
};

export default GameList;
