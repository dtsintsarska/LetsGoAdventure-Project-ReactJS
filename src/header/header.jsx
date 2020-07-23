import React from 'react';
// import Link from '../link'
import styles from './index.module.css';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <section className={styles.navigation}>
      <img src={logo} alt='Logo' className={styles.siteTitle} />
      <nav>
        <ul>
          <li>
            <div className={styles.dropdown}>
              <span className={styles.wrapperProgram}>
                <a href='#'>ABOUT LET'S GO ADVENTURE</a>
              </span>
              <div class={styles.dropdownContent}>
                <a href='#'>Team</a>
                <a href='#'>Contact us</a>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.dropdown}>
              <span className={styles.wrapperProgram}>
                <a href='#'>OUR ADVENTURES</a>
              </span>
              <div className={styles.dropdownContent}>
                <a href='#'>Mointain Adventures</a>
                <a href='#'>Sea Adventures</a>
                <a href='#'>Adventures abroad</a>
                <a href='#'>Adventures with bikes</a>
              </div>
            </div>
          </li>
          <li>
            <a href='#'>LOGIN</a>
          </li>
          <li>
            <a href='#'>REGISTER</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
