import React from 'react';
import Header from '../../components/header/index';
import Background from '../../components/background/index';
import Welcome from '../../components/welcome/index';
import Advantages from '../../components/advantages/index';
import Footer from '../../components/footer/index';
import Offers from '../../components/offerts/index';

const HomePage = () => {
  return (
    <div>
      <header>
        <Header />
        <Background />
      </header>
      <main>
        <Welcome />
        <Advantages />
        <Offers title='Upcoming Adventures' length='3' />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
