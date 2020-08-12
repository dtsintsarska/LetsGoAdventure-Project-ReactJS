import React, { Fragment } from 'react';
import styles from './errorPage.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';

const ErrorPage = () => {
  return (
    <Fragment>
      <Header />
      <section className={styles.background}>
        <Title title='Error 404' />
        <h4> Page Not Found</h4>
        <div>.</div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default ErrorPage;
