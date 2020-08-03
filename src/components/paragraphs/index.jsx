import React from 'react';
//import styles from './index.module.css';

const Paragraph = ({ days }) => {
  let result = [];

  for (let i = 0; i < Number(days); i++) {
    result.push(
      <div key={i}>
        <p>DAY {i + 1}</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        dolorem tempore ipsa ab modi illum quam quasi impedit beatae sunt
        laudantium nobis, quaerat cumque! Ipsum dicta veritatis vel labore enim?
      </div>
    );
  }

  return result;
};

export default Paragraph;
