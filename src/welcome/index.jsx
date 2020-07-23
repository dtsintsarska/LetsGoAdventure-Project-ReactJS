import React from 'react';
// import Link from '../link'
import styles from './index.module.css';

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <h2>Welcome to "Let's Go Adventure" Club!</h2>
      <p>
        Our value is in the quality of the experience we provide. The Let's Go
        Adventure Club, as a business, is an extension of who we, the staff, are
        as people. Climbers. Backpackers. Kayakers. Yoga instructors.
        Adventurers. We share our love of special places reached through
        rigorous activity.
      </p>
      <p>
        If you are looking for your next adventure, or just want to say "Hi!",
        <span>contact us now.</span> We are here for you!
      </p>
    </section>
  );
};

export default Welcome;
