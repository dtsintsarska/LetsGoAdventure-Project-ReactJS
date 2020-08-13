import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './logoutPage.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
import SubmitButton from '../../components/submit-button';
import UserContext from '../../Context';

const LogoutPage = () => {
  const context = useContext(UserContext);
  const history = useHistory();

  const handleYes = () => {
    context.logOut();
    toast.success('You have been successfully logged out!');
    history.push('/');
  };

  const handleNo = () => {
    history.goBack();
  };

  return (
    <Fragment>
      <Header />
      <section className={styles.background}>
        <Title title='' />
        <h4>Do you really want to log out?</h4>
        <div className={styles.buttons}>
          <div onClick={handleNo} className={styles.buttonNo}>
            <SubmitButton title='No' onClick={handleNo} />
          </div>
          <div onClick={handleYes} className={styles.buttonYes}>
            <SubmitButton title='Yes' onClick={handleYes} />
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default LogoutPage;
