import React from 'react';

import styles from './index.module.css';

const Gallery = ({ image, alt, index }) => {
  return <img src={image} alt={alt} key={index} className={styles.pic} />;
};

export default Gallery;
