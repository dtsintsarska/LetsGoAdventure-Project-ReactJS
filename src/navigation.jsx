import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import UserContext from './Context';

import HomePage from './pages/home-page/homePage';
import RegisterPage from './pages/register-page/registerPage';
import LoginPage from './pages/login-page/loginPage';
import Contacts from './pages/contacts-page/contactUsPage';
import TeamPage from './pages/team-page/teamPage';
import AboutUsPage from './pages/aboutUs-page/aboutUsPage';
import AdventuresAllPage from './pages/adventures-all-page/adventureAllPage';
import AdventureDetailsPage from './pages/adventure-details-page/adventureDetailsPage';
import CreateAdventurePage from './pages/create-adventure/createAdventure';
import CategorySearch from './pages/category-adventure-page/categorySearchPage';
import InputSearch from './pages/input-search-page/inputSearchPage';
import EnrollPage from './pages/enroll-page/enrollPage';
import DeletePage from './pages/delete-page/deletePage';
import LogoutPage from './pages/logout-page/logoutPage';
import CommentsPage from './pages/comments-page/commentsPage';
import ProfilePage from './pages/profile-page/profilePage';
import ErrorPage from './pages/error-page/errorPage';

const Navigation = () => {
  const context = useContext(UserContext);
  const loggedIn = context.user.loggedIn;
  const isAdmin = context.isAdmin;

  console.log(context);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' exact component={HomePage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/register'>
          {loggedIn ? <Redirect to='/home' /> : <RegisterPage />}
        </Route>
        <Route exact path='/login'>
          {loggedIn ? <Redirect to='/home' /> : <LoginPage />}
        </Route>
        <Route exact path='/logout'>
          {!loggedIn ? <Redirect to='/home' /> : <LogoutPage />}
        </Route>
        <Route exact path='/profile/:id'>
          {!loggedIn ? <Redirect to='/login' /> : <ProfilePage />}
        </Route>
        <Route path='/aboutus' exact component={AboutUsPage} />
        <Route path='/aboutus/contacts' component={Contacts} />
        <Route path='/aboutus/team' component={TeamPage} />
        <Route exact path='/adventures/create-new'>
          {!isAdmin ? <Redirect to='/home' /> : <CreateAdventurePage />}
        </Route>
        <Route
          exact
          path='/adventures/enroll/:id'
          exact
          component={EnrollPage}
        />
        <Route exact path='/adventures/comments/:id' component={CommentsPage} />
        <Route exact path='/adventures/delete/:id' component={DeletePage} />
        <Route exact path='/adventures' component={AdventuresAllPage} />
        <Route exact path='/adventures/:id' component={AdventureDetailsPage} />
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
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
