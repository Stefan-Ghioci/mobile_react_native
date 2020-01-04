import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import {
  HomeHeader,
  TextLoadingIndicator,
  GameList,
  CustomFloatingAction
} from './subcomponents';
import { GET_URL } from '../../api';
import ImageModal from './subcomponents/ImageModal';

const HomeScreenContainer = props => {
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const [selectedImage, selectImage] = useState("");
  useEffect(() => {
    fetch(GET_URL, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(responseJson => {
        setLoading(false);
        setGames(responseJson);
      })
      .catch(error => console.log(error));
  }, [isLoading]);

  const handleLogout = () => {
    // TODO: logout after auth system works
    props.navigation.navigate('SignIn');
  };

  const handleGamePressed = game => {
    selectImage(game.imageURL);
    setVisible(true);
  };

  return (
    <>
      <HomeHeader refresh={() => setLoading(true)} logout={handleLogout} />
      <>
        <ScrollView style={{ flex: 1 }}>
          {isLoading ? (
            <TextLoadingIndicator message='Loading games...' />
          ) : (
            <GameList list={games} onPress={handleGamePressed} />
          )}
        </ScrollView>
        <CustomFloatingAction />
        <ImageModal
          isVisible={isVisible}
          toggleModal={() => setVisible(!isVisible)}
          imageURL={selectedImage}
        />
      </>
    </>
  );
};

export default HomeScreenContainer;
