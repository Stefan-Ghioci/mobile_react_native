import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import {
  RatingAvatar,
  TextLoadingIndicator
} from '../../utils/CustomComponents';
import { formatDate } from '../../utils';

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

  const refreshScreen = () => {
    setLoading(true);
  };

  const logout = () => {
    // TODO: logout after auth system works
    props.navigation.navigate('SignIn');
  };

  return (
    <>
      <Header
        statusBarProps={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          translucent: true,
          barStyle: 'light-content'
        }}
        leftComponent={{
          icon: 'power-settings-new',
          size: 28,
          color: 'white',
          underlayColor: '#64b5f6',
          onPress: logout
        }}
        centerComponent={{
          text: 'MY GAMES',
          style: { fontSize: 18, fontWeight: 'bold', color: 'white' }
        }}
        rightComponent={{
          icon: 'refresh',
          color: 'white',
          size: 28,
          onPress: refreshScreen,
          underlayColor: '#64b5f6'
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        {isLoading ? (
          <TextLoadingIndicator message='Loading games...' />
        ) : (
          games.map((e, i) => (
            <ListItem
              key={i}
              leftAvatar={<RatingAvatar value={e.rating} />}
              title={e.name}
              rightTitle={formatDate(e.date)}
              bottomDivider
            />
          ))
        )}
      </ScrollView>
    </>
  );
};

export default HomeScreenContainer;
