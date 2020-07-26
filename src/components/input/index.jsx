import React from 'react';
import styles from './index.module.css';

const Input = ({ label, id, value, onChange, type }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>
        {label}:
        <input id={id} value={value} type={type} onChange={onChange} />
      </label>
    </div>
  );
};

export default Input;
