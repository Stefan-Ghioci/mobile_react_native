import React from 'react';
import { View } from 'react-native';
import { showSuccess } from '../../../../utils';
import StatsModalView from './StatsModalView';
import Modal from 'react-native-modal';

const StatsModalContainer = ({ games, isVisible, toggleModal }) => {
  const handleSendMail = () => {
    toggleModal();
    showSuccess('Stats successfully sent to your email');
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
    <Modal
      animationIn='slideInUp'
      animationInTiming={1000}
      isVisible={isVisible}
    >
          <StatsModalView
            chartData={data}
            onSendMail={handleSendMail}
            onGoBack={toggleModal}
          />
    </Modal>
  );
};

export default StatsModalContainer;
