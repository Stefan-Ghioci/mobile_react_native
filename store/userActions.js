export const userInitialState = {
    user: {
      loggedIn: false
    }
  };
  
  export const userActions = {
    login: _state => {
      return { user: { loggedIn: true } };
    },
    logout: _state => {
      return { user: { loggedIn: false } };
    }
  };