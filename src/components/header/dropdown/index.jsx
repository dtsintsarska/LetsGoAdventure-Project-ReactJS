import React from 'react';
import styles from './index.module.css';
import Link from '../..//link/index';

const Dropdown = ({ list }) => {
  console.log(list);

  return list.map((drop) => {
    return <Link key={drop.title} href={drop.link} title={drop.title} />;
  });
};

export default Dropdown;
