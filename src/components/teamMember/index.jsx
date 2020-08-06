import React from 'react';
import styles from './index.module.css';

const TeamMember = ({ name, image, description }) => {
  return (
    <div className={styles.member}>
      <img src={image} alt='Team' />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default TeamMember;
