import React, { Component, Fragment } from 'react';
import Title from '../../components/title';
import styles from './contacts.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Details from '../../components/contact-details/index';
import Map from '../../components/map/index';

class Contacts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Header />
        <section className={styles.background}>
          <Title title='Contact Us' />
          <h4>
            While we're good with smoke signals, there are simpler ways for us
            to get in touch and answer your questions.
          </h4>
        </section>
        <section className={styles.info}>
          <Details />
          <Map />
        </section>

        <Footer />
      </Fragment>
    );
  }
}

export default Contacts;
