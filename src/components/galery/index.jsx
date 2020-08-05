import React from 'react';

import styles from './index.module.css';

const Gallery = ({ image, alt, key }) => {
  return <img src={image} alt={alt} className={styles.pic} />;
};

export default Gallery;
