import React from 'react';
import AppContainer from './navigation';
import { StoreProvider } from './store';

export default App = () => (
  <StoreProvider>
    <AppContainer />
  </StoreProvider>
);
