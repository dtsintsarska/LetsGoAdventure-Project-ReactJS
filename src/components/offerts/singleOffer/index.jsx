import React from 'react';
import styles from './index.module.css';

const singleOffert = ({ img, title, date, price, description }) => {
  return (
    <li className={styles.offert}>
      <img src={img} alt='picture' />
      <section className={styles.info}>
        <div>
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
        <div>
          <p>{price}</p>
        </div>
      </section>
      <section className={styles.more}>
        <p>{description}</p>
        <button>ENROLL TODAY</button>
      </section>
    </li>
  );
};

export default singleOffert;
