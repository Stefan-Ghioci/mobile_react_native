import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import {
  HomeHeader,
  TextLoadingIndicator,
  GameList,
  CustomFloatingAction,
  StatsModal
} from './subcomponents';
import { GET_GAMES_URL } from '../../api';
import ImageModal from './subcomponents/ImageModal';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { sendEmail } from '../../utils';

const HomeScreenContainer = props => {
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isImageModalVisible, setImageModalVisibile] = useState(false);
  const [isStatsModalVisible, setStatsModalVisibile] = useState(false);
  const [selectedImage, selectImage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log('Fetching games list with axios from ' + GET_GAMES_URL);
    axios
      .get(GET_GAMES_URL, { timeout: 200 })
      .then(response => response.data)
      .then(storeData)
      .catch(console.log)
      .finally(getData);
  };

  const storeData = async data => {
    console.log('Storing ' + data.length + ' items into Async Storage');
    await AsyncStorage.setItem('@games', JSON.stringify(data));
    console.log('Items stored successfully');
  };

  const getData = async () => {
    console.log('Loading data from Async Storage');
    const json = await AsyncStorage.getItem('@games');
    const data = JSON.parse(json);

    console.log(data.length + ' items loaded successfully');
    setLoading(false);
    setGames(data);
  };

  const refreshData = () => {
    console.log('Refetching data from server, on user demand');
    setLoading(true);
    fetchData();
  };

  const handleLogout = () => {
    console.log('Logging out, redirecting to Sign In menu...');
    props.navigation.navigate('SignIn');
  };

  const handleGamePressed = game => {
    console.log('Game pressed, loading game image modal...');
    if (game.imageURL !== '') {
      selectImage(game.imageURL);
      setImageModalVisibile(true);
    }
  };

  const handleButtonPressed = name => {
    if (name === 'bt_add_game') {
      console.log('Navigating to Add Game screen...');
      props.navigation.navigate('AddGame');
    } else if (name === 'bt_stats') {
      if (games === []) {
        console.log('Cannot open stats modal, no games loaded');
      } else {
        console.log('Opening stats modal...');
        setStatsModalVisibile(true);
      }
    } else if (name === 'bt_email') {
      console.log('Sending game list through email');
      sendEmail(games);
    }
  };

  return (
    <>
      <HomeHeader refresh={refreshData} logout={handleLogout} />
      <ScrollView style={{ flex: 1 }}>
        {isLoading ? (
          <TextLoadingIndicator message='Loading games...' />
        ) : (
          <GameList list={games} onPress={handleGamePressed} />
        )}
      </ScrollView>
      <CustomFloatingAction onPressItem={handleButtonPressed} />
      <ImageModal
        isVisible={isImageModalVisible}
        toggleModal={() => setImageModalVisibile(!isImageModalVisible)}
        imageURL={selectedImage}
      />
      <StatsModal
        games={games}
        isVisible={isStatsModalVisible}
        toggleModal={() => setStatsModalVisibile(!isStatsModalVisible)}
      />
    </>
  );
};

export default HomeScreenContainer;
