import React from 'react';
import styles from './index.module.css';
import AdvantageComponent from './advantage/index';
import listAdvantages from '../../helpers/list-advantages/list';

const Advantages = () => {
  const list = listAdvantages();
  return (
    <section className={styles.advantages}>
      <h2>What makes us different?</h2>
      <ul className={styles.ul}>
        {list.map((element) => {
          return (
            <AdvantageComponent
              key={element.title}
              img={element.img}
              title={element.title}
              description={element.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Advantages;
