import React from 'react';
import { useState } from 'react';
import styles from './index.module.css';
import Button from '../../button-link';
import Participants from '../../participant';

const SingleOffer = ({
  image,
  destination,
  date,
  guide,
  category,
  days,
  country,
  _id,
  isAdmin,
  participants,
}) => {
  const [show, setShow] = useState(false);

  const onClick = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <li className={styles.offert}>
      <img src={image} alt='Adventure' />
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
        <div>Country: {country}</div>
        <div>Guide: {guide}</div>
        <div>Category: {category}</div>
        <div className={styles.buttons}>
          <div>
            <Button title='See more' href={`/adventures/${_id}`} />
          </div>
          {isAdmin ? (
            <div onClick={onClick}>
              <Button title='Participants' onClick={onClick} />
            </div>
          ) : null}
        </div>
        <div className={styles.participants}>
          {show ? <Participants participants={participants} /> : null}
        </div>
      </section>
    </li>
  );
};

export default SingleOffer;
