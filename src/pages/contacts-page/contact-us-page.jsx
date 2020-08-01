import React, { Component, Fragment } from 'react';
//import { Helmet } from 'react-helmet';
import Title from '../../components/title';
//import SubmitButton from '../../components/submit-button';
import styles from './contacts.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Details from '../../components/contact-details/index';
import Map from '../../components/map/index';
//import PageLayout from '../../components/page-layout'
//import Input from '../../components/input/index';
//import Link from '../../components/link';

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
