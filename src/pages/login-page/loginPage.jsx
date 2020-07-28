import React, { Component, Fragment } from 'react';
//import { Helmet } from 'react-helmet';
import Title from '../../components/title';
import SubmitButton from '../../components/submit-button';
import styles from './loginPage.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
//import PageLayout from '../../components/page-layout'
import Input from '../../components/input/index';
import Link from '../../components/link';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  //static contextType = UserContext

  onChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;

    this.setState(newState);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    //   await authenticate('http://localhost:9999/api/user/register', {
    //       username,
    //       password
    //     }, (user) => {
    //       this.context.logIn(user)
    //       this.props.history.push('/')
    //     }, (e) => {
    //       console.log('Error', e)
    //     }
    //   )
  };

  render() {
    const { username, password } = this.state;

    return (
      <Fragment>
        <Header />
        <form className={styles.container} onSubmit={this.handleSubmit}>
          <Title title='Login' />
          <Input
            value={username}
            onChange={(e) => this.onChange(e, 'username')}
            label='Username'
            id='username'
            type='text'
          />
          <Input
            type='password'
            value={password}
            onChange={(e) => this.onChange(e, 'password')}
            label='Password'
            id='password'
            type='password'
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
  }
}

export default LoginPage;
