import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page/homePage';
// import ShareThoughtsPage from './pages/share-thoughts'
import RegisterPage from './pages/register-page/registerPage';
import LoginPage from './pages/login-page/loginPage';
import Contacts from './pages/contacts-page/contact-us-page';
// import ProfilePage from './pages/profile'
// import ErrorPage from './pages/error'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/aboutus/contacts' component={Contacts} />
        {/* <Route path="/share" component={ShareThoughtsPage} />
        
        
        <Route path="/profile/:userid" component={ProfilePage} />
        <Route component={ErrorPage} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
