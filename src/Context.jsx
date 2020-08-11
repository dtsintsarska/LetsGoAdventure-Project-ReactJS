import React from 'react';

const UserContext = React.createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
  isAdmin: null,
});

export default UserContext;
