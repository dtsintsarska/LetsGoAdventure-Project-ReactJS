import React, { useState, useEffect } from 'react';
import UserContext from './Context';
import getCookie from './helpers/cookie';

const App = (props) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const logIn = (user) => {
    setUser({
      ...user,
      loggedIn: true,
    });
  };

  const logOut = () => {
    document.cookie = 'x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    setUser({
      loggedIn: false,
    });
  };

  useEffect(() => {
    const token = getCookie('x-auth-token');

    if (!token) {
      logOut();
      setLoading(false);
      return;
    }

    fetch('http://localhost:9999/api/user/verify', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then((promise) => {
        return promise.json();
      })
      .then((response) => {
        if (response.status) {
          logIn({
            username: response.user.username,
            id: response.user._id,
          });
        } else {
          logOut();
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ textAlign: 'center' }}>Loading....</h3>
        <img
          src='https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif'
          alt='Loading'
        />
      </div>
    );
  }

  return (
    <UserContext.Provider
      value={{
        user,
        logIn,
        logOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default App;
