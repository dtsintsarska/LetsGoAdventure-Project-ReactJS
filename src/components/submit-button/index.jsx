import React from 'react';
import styles from './index.module.css';

const SubmitButton = ({ title }) => {
  return (
    <div className={styles.container}>
      <button className={styles.submit}>{title}</button>
    </div>
  );
};

export default SubmitButton;
