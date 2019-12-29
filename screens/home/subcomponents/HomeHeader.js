import React from 'react';
import { Header } from 'react-native-elements';

const HomeHeader = ({ refresh, logout }) => {
  return (
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
        onPress: refresh,
        underlayColor: '#64b5f6'
      }}
    />
  );
};

export default HomeHeader;
