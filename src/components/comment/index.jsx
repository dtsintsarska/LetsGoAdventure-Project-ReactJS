import React from 'react';
import styles from './index.module.css';

const Comment = ({ comment, username }) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>{comment}</div>
      <p>
        <span className={styles.user}>
          <strong>Author: {username}</strong>
        </span>
      </p>
    </div>
  );
};

export default Comment;
