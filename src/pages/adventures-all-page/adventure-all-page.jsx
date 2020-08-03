import React, { Fragment } from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Title from '../../components/title';
import styles from './adventure-all.module.css';
import Search from '../../components/search';
import Offers from '../../components/offerts';
//import Offers from '../../components/offerts/index';

const AdventuresAll = () => {
  return (
    <Fragment>
      <Header />
      <section className={styles.background}>
        <Title title='Adventures' />
        <h4>Live your life by a compass, not a clock!</h4>
      </section>
      <section className={styles.search}>
        <Search />
      </section>
      <section className={styles.adventures}>
        <Offers title='Our Adventures' />
      </section>

      <Footer />
    </Fragment>
  );
};

export default AdventuresAll;
