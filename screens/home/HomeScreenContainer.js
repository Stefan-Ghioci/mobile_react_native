import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { HomeHeader, TextLoadingIndicator, GameList } from './subcomponents';

const HomeScreenContainer = props => {
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.0.102:8080/mobileapps/games', {
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

  return (
    <>
      <HomeHeader refresh={() => setLoading(true)} logout={handleLogout} />
      <ScrollView style={{ flex: 1 }}>
        {isLoading ? (
          <TextLoadingIndicator message='Loading games...' />
        ) : (
          <GameList list={games} />
        )}
      </ScrollView>
    </>
  );
};

export default HomeScreenContainer;
