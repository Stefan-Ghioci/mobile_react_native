import React from 'react';
import { View } from 'react-native';
import { showSuccess } from '../../utils';
import StatsScreenView from './StatsScreenView';

const StatsScreenContainer = props => {
  const games = JSON.parse(props.navigation.getParam('games'));

  const handleSendMail = () => {
    showSuccess('Stats successfully sent to your email');
    goBack();
  };

  const goBack = () => {
    props.navigation.navigate('Home');
  };

  const createLabels = () => {
    const labels = games
      .map(game => parseInt(game.date.substr(0, 4), 10))
      .filter((v, i, a) => a.indexOf(v) === i);
    return labels.sort();
  };

  const createData = () =>
    createLabels().map(label => {
      const ratings = games
        .filter(game => parseInt(game.date.substr(0, 4), 10) === label)
        .map(game => game.rating);
      return ratings.reduce((a, b) => a + b, 0.0) / ratings.length;
    });

  const data = {
    labels: createLabels(),
    datasets: [{ data: createData() }]
  };

  return (
    <View style={{ flex: 1 }}>
      <StatsScreenView
        chartData={data}
        onSendMail={handleSendMail}
        onGoBack={goBack}
      />
    </View>
  );
};

export default StatsScreenContainer;
