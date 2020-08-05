import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import UserContext from './Context';

import HomePage from './pages/home-page/homePage';
import RegisterPage from './pages/register-page/registerPage';
import LoginPage from './pages/login-page/loginPage';
import Contacts from './pages/contacts-page/contact-us-page';
import TeamPage from './pages/team-page/team-page';
import AboutUsPage from './pages/aboutUs-page/about-us-page';
import AdventuresAllPage from './pages/adventures-all-page/adventure-all-page';
import AdventureDetailsPage from './pages/adventure-details-page/adventure-details-page';
import CreateAdventurePage from './pages/create-adventure/create-adventure';

const Navigation = () => {
  const context = useContext(UserContext);
  console.log(context);
  const loggedIn = context.user.loggedIn;

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/home' component={HomePage} />
        <Route path='/register'>
          {loggedIn ? <Redirect to='/home' /> : <RegisterPage />}
        </Route>
        <Route path='/login'>
          {loggedIn ? <Redirect to='/home' /> : <LoginPage />}
        </Route>
        <Route path='/aboutus' exact component={AboutUsPage} />
        <Route path='/aboutus/contacts' component={Contacts} />
        <Route path='/aboutus/team' component={TeamPage} />
        <Route
          path='/adventures/create-new'
          exact
          component={CreateAdventurePage}
        />
        <Route path='/adventures' exact component={AdventuresAllPage} />
        <Route path='/adventures/:id' exact component={AdventureDetailsPage} />

        {/* <Route component={ErrorPage} />  */}
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
