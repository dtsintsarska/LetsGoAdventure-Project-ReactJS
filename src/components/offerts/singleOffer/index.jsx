import React from 'react';
import styles from './index.module.css';

const SingleOffer = ({
  image,
  destination,
  date,
  price,
  guide,
  category,
  days,
  description,
  country,
}) => {
  return (
    <li className={styles.offert}>
      <img src={image} alt='picture' />
      <section className={styles.info}>
        <div>
          <h3>{destination}</h3>
          <p>{date}</p>
        </div>
        <div>
          <p>{days} days</p>
        </div>
      </section>
      <section className={styles.more}>
        <p>Coutry: {country}</p>
        <p>Guide: {guide}</p>
        <button>READ MORE</button>
      </section>
    </li>
  );
};

export default SingleOffer;
