import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/title';
import styles from './about-us.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/button-link';

const AboutUsPage = () => {
  return (
    <Fragment>
      <Header />
      <section className={styles.background}>
        <Title title='About Us' />
        <h4>Who we are? What matters to us? What we do?</h4>
      </section>
      <section className={styles.info}>
        <h1>Let's Go Adventure Club</h1>
        <p>
          "Let's Go Adventure" was created in early 2010 by avid adventurers,
          avid mountaineers and loyal friends. We have been professional
          mountain guides for more than 10 years and what unites us is our
          common passion - mountains and adventures! All our adventures are
          created with great attention to the client and understanding of
          nature, to convey to you our passion for the mountains and to ignite
          the spark of adventure in your eyes.
        </p>
        <h4>
          We believe that we will continue to pleasantly surprise those of you
          who know us and that we will gain the trust of all those with whom our
          shared adventures are about to meet us.
        </h4>
        <h4>See more about us:</h4>
      </section>
      <section className={styles.buttons}>
        <Button href='/aboutus/team' title='Our Team' />
        <Button href='/aboutus/contacts' title='Contact Us' />
      </section>

      <Footer />
    </Fragment>
  );
};

export default AboutUsPage;
