import React from 'react';
import Header from '../../header/header';
import Background from '../../background/index';
import Welcome from '../../welcome/index';
// import styles from './index.module.css';
// import Aside from '../aside';
// import Footer from '../footer';

const HomePage = (props) => {
  return (
    <div>
      <header>
        <Header />
        <Background />
      </header>
      <main>
        <Welcome />
      </main>
    </div>

    //   <Footer />
    // </div>
  );
};

export default HomePage;
