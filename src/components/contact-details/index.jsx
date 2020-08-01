import React from 'react';
import styles from './index.module.css';
import location from '../../images/placeholder.png';
import mail from '../../images/mail.png';
import phone from '../../images/phone.png';

const Details = () => {
  return (
    <section className={styles.info}>
      <div>
        <img src={location} alt='Location' />
        <address>Address: Bulgaria, Into the Wild</address>
      </div>
      <div>
        <img src={mail} alt='Mail' />
        <address>Mail: letsgoadventure@gmail.com</address>
      </div>
      <div>
        <img src={phone} alt='Mail' />
        <address>Phone: +359 8575757575757</address>
      </div>
    </section>
  );
};

export default Details;
