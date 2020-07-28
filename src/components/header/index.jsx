import React from 'react';
import Link from '../../components/link';
import styles from './index.module.css';
import logo from '../../images/logo.png';
import getNavigation from '../../helpers/navigation-list';
import Dropdown from './dropdown/index';

const Header = () => {
  const links = getNavigation();

  console.log('Links', links);

  return (
    <section className={styles.navigation}>
      <img src={logo} alt='Logo' className={styles.siteTitle} />
      <nav>
        <ul>
          {links.map((navElement) => {
            if (navElement.dropdown) {
              return (
                <li>
                  <div className={styles.dropdown}>
                    <span className={styles.wrapperProgram}>
                      <Link
                        key={navElement.title}
                        href={navElement.link}
                        title={navElement.title}
                      />
                    </span>
                    <div className={styles.dropdownContent}>
                      <Dropdown list={navElement.dropdown} />
                    </div>
                  </div>
                </li>
              );
            } else {
              return (
                <li>
                  <Link
                    key={navElement.title}
                    href={navElement.link}
                    title={navElement.title}
                    // type="header"
                  />
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Header;
