import React from 'react';
import styles from './index.module.css';
import Button from '../../button-link';

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
        <div>Coutry: {country}</div>
        <div>Guide: {guide}</div>
        <div>Category: {category}</div>
        <Button title='See more' />
      </section>
    </li>
  );
};

export default SingleOffer;
