import React from 'react';
import styles from './index.module.css';

const Footer = () => {
  return (
    <footer>
      <p>All Rights Reserved © Let's Go Adventure</p>
      <ul className={styles.social}>
        <li>Follow as:</li>
        <li>
          <a href='#'>
            <i class='fab fa-facebook'></i>
          </a>
        </li>
        <li>
          <a href='#'>
            <i class='fab fa-instagram'></i>
          </a>
        </li>
        <li>
          <a href='#'>
            <i class='fab fa-twitter'></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
