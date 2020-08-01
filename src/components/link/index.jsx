import React from 'react';

import { Link } from 'react-router-dom';

const LinkComponent = ({ title, href }) => {
  return (
    // <div className={styles[`${type}-list-item`]}>
    <Link to={href}>{title}</Link>
    // </div>
  );
};

export default LinkComponent;
