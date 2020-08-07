import React, { useState, useEffect } from 'react';
import UserContext from './Context';
import getCookie from './helpers/cookie';
import adminList from './helpers/admin';
import Loading from './components/loading';

const App = (props) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [isAdmin, setAdmin] = useState(false);

  const logIn = (user) => {
    if (adminList.includes(user.id.toString())) {
      setAdmin(true);
    }

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
    return <Loading />;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isAdmin,
        logIn,
        logOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default App;
