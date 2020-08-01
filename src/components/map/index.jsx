import React from 'react';
import styles from './index.module.css';

const Map = () => {
  return (
    <div className={styles.map}>
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.7440535871933!2d23.350088314971213!3d42.666778923669696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85cca4a719b7%3A0xdf53fcbcd8e758d7!2z0KHQvtGE0YLRg9C10YDQtdC9INGD0L3QuNCy0LXRgNGB0LjRgtC10YI!5e0!3m2!1sbg!2sbg!4v1596275156074!5m2!1sbg!2sbg'></iframe>
    </div>
  );
};

export default Map;
