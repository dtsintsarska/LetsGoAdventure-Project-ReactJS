import React from 'react';

import styles from './index.module.css';

const Gallery = ({ image, alt, key }) => {
  return <img src={image} alt={alt} key={key} className={styles.pic} />;
};

export default Gallery;
