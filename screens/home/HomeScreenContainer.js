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
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const HomeScreenContainer = props => {
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const [selectedImage, selectImage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get(GET_URL, { timeout: 3000 })
      .then(response => response.json())
      .then(storeData)
      .catch(console.log)
      .finally(getData);
  };

  const storeData = async data => {
    await AsyncStorage.setItem('@games', JSON.stringify(data));
  };

  const getData = async () => {
    const json = await AsyncStorage.getItem('@games');
    const data = JSON.parse(json);

    setLoading(false);
    setGames(data);
  };

  const refreshData = () => {
    setLoading(true);
    fetchData();
  };

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
      <HomeHeader refresh={refreshData} logout={handleLogout} />
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
