import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const Button = ({ href, title }) => {
  return (
    <Link to={href}>
      <button type='button' className={styles.button}>
        {title}
      </button>
    </Link>
  );
};

export default Button;
