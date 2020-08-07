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
import CategorySearch from './pages/category-adventure-page/category-search-page';
import InputSearch from './pages/input-search-page/inputSearchPage';
import EnrollPage from './pages/enroll-page/enrollPage';

const Navigation = () => {
  const context = useContext(UserContext);
  const loggedIn = context.user.loggedIn;
  const isAdmin = context.isAdmin;

  console.log(context);
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
        <Route path='/adventures/create-new'>
          {!isAdmin ? <Redirect to='/home' /> : <CreateAdventurePage />}
        </Route>

        <Route path='/adventures' exact component={AdventuresAllPage} />
        <Route path='/adventures/:id' exact component={AdventureDetailsPage} />
        <Route
          path='/adventures/search/:category'
          exact
          component={CategorySearch}
        />
        <Route
          path='/adventures/search/name/:name'
          exact
          component={InputSearch}
        />
        <Route path='/adventures/enroll/:id' exact component={EnrollPage} />

        {/* <Route component={ErrorPage} />  */}
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
