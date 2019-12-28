import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Image, ListItem, Rating } from 'react-native-elements';

const HomeScreenContainer = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch('http://192.168.0.102:8080/mobileapps/games', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(responseJson => setGames(responseJson))
      .catch(error => console.log(error));
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
      {games.map((e, i) => (
        <>
          <ListItem key={i} title={e.name} subtitle={e.date} />
          <Rating showRating fractions='1' readOnly startingValue={e.rating} />
          <Image
            source={{ uri: e.imageURL }}
            style={{ width: '100%', height: 100 }}
          />
        </>
      ))}
    </ScrollView>
  );
};

export default HomeScreenContainer;
