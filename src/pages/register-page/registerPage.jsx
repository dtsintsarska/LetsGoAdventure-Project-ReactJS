import React, { useState, useContext, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../../components/title';
import SubmitButton from '../../components/submit-button';
import styles from './index.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Input from '../../components/input/index';
import Link from '../../components/link';
import authenticate from '../../helpers/authenticate';
import UserContext from '../../Context';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRepassword] = useState('');
  const context = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== rePassword) {
      history.push('/register');
      alert('Passwords should match!');
    } else {
      await authenticate(
        'http://localhost:9999/api/user/register',
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
    }
  };

  return (
    <Fragment>
      <Header />
      <form className={styles.container} onSubmit={handleSubmit}>
        <Title title='Register' />
        <p>Please fill in this form to create an account</p>
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
        <Input
          value={rePassword}
          onChange={(e) => setRepassword(e.target.value)}
          label='Repeat Password'
          id='re-password'
          type='password'
          placeholder='Please repeat your password'
        />
        <SubmitButton title='Register' />
        <span>
          Already have an account?
          <Link href='/login' title='Sign in' />
        </span>
      </form>
      <Footer />
    </Fragment>
  );
};

export default RegisterPage;
