import React, { useContext, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../../components/title';
import SubmitButton from '../../components/submit-button';
import styles from './loginPage.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Input from '../../components/input/index';
import Link from '../../components/link';
import authenticate from '../../helpers/authenticate';
import UserContext from '../../Context';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const context = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await authenticate(
      'http://localhost:9999/api/user/login',
      {
        username,
        password,
      },
      (user) => {
        context.logIn(user);
        history.push('/');
      },
      (e) => {
        console.log('Error', e);
      }
    );
  };
  return (
    <Fragment>
      <Header />
      <form className={styles.container} onSubmit={handleSubmit}>
        <Title title='Login' />
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label='Username'
          id='username'
          type='text'
          placeholder='Please type your username'
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label='Password'
          id='password'
          type='password'
          placeholder='Please type your password'
        />
        <SubmitButton title='Login' />
        <span>
          New user?
          <Link href='/register' title=' Create your own account' />
        </span>
      </form>
      <Footer />
    </Fragment>
  );
};

export default LoginPage;
