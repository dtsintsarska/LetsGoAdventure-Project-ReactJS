import React, { useState, Fragment, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './enrollPage.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Input from '../../components/input';
import Title from '../../components/title';
import SubmitButton from '../../components/submit-button';
import getCookie from '../../helpers/cookie';
import UserContext from '../../Context';
import enrollValidator from '../../helpers/enrollValidator';

const EnrollPage = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const context = useContext(UserContext);
  const history = useHistory();

  const image = props.history.location.state.image;
  const title = props.history.location.state.destination;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!enrollValidator(firstName, lastName, phone, email)) {
      return;
    }

    const id = context.user.id;
    const adventureId = props.match.params.id;

    await fetch(`http://localhost:9999/api/offers/enroll/${adventureId}`, {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        phone,
        email,
        id,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: getCookie('x-auth-token'),
      },
    });

    setEmail('');
    setFirstName('');
    setLastName('');
    setPhone('');
    toast.success('Welcome on board to your next adventure with us!', {
      position: 'bottom-center',
    });
    history.push(`/adventures/${adventureId}`);
  };

  if (!context.user.loggedIn) {
    return <Redirect to='/login' />;
  }
  return (
    <Fragment>
      <Header />
      <section
        style={{ backgroundImage: `url(${image})` }}
        className={styles.background}
      >
        <Title title='Become a part of our next adventure' />
        <h4>Fulfill all fields to save your seat in "{title}"</h4>
      </section>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          label='First Name'
          id='firstName'
          placeholder='Type your first name'
          type='text'
        />
        <Input
          type='text'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          label='Last Name'
          id='lastName'
          placeholder='Type your last name'
        />
        <Input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label='Email'
          id='email'
          placeholder='Type your email address'
        />
        <Input
          type='text'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          label='Phone'
          id='phone'
          placeholder='Type your phone starts with +359'
        />

        <SubmitButton title='Submit' onClick={handleSubmit} />
      </form>

      <Footer />
    </Fragment>
  );
};

export default EnrollPage;
