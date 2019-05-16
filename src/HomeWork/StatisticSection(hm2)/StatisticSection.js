import React from 'react';
import styles from './StatisticSection.css';

const StatisticSection = ({ stats }) => (
  <section className={styles.stats}>
  <h2 className={styles.title}>Upload stats</h2>

  <ul className={styles.list}>
      {stats.map(el => (
        <li className={styles.item}>
          <span className={styles.label}>{el.label}</span>
          <span className={styles.percentage}>{el.percentage}%</span>
        </li>
      ))}
      ;
    </ul>
    </section>
);

export default StatisticSection;
