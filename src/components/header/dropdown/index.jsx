import React from 'react';
import Link from '../..//link/index';

const Dropdown = ({ list }) => {
  return list.map((drop) => {
    return <Link key={drop.title} href={drop.link} title={drop.title} />;
  });
};

export default Dropdown;
