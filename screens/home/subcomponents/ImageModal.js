import React from 'react';
import Modal from 'react-native-modal';
import { View, Image } from 'react-native';

const ImageModal = ({ isVisible, toggleModal, imageURL }) => {
  return (
    <Modal
      animationIn='slideInDown'
      animationInTiming={1000}
      isVisible={isVisible}
      onSwipeComplete={toggleModal}
      swipeDirection={['up', 'down', 'left', 'right']}
    >
      <View>
        <Image
          source={{ uri: imageURL }}
          style={{ width: '100%', height: 250, borderRadius: 25 }}
        />
      </View>
    </Modal>
  );
};

export default ImageModal;
