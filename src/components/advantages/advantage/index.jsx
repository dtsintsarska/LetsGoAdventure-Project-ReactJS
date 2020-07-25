import React from 'react';
import styles from './index.module.css';

const AdvantageComponent = ({ title, img, description }) => {
  return (
    <li className={styles.listedItem}>
      <div className={styles.div}>
        <img className={styles.image} src={img} alt='pic' />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default AdvantageComponent;
