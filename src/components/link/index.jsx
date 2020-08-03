import React from 'react';
import styles from './index.module.css';

import { Link } from 'react-router-dom';

const LinkComponent = ({ title, href }) => {
  return (
    <div className={styles.link}>
      <Link to={href} className={styles.list}>
        {title}
      </Link>
    </div>
  );
};

export default LinkComponent;
