import React from 'react';
import styles from './StatisticSection.module.css';
import PropTypes from 'prop-types';

const StatisticSection = ({ title, stats }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.list}>
      {stats.map(el => (
        <li key={el.id} className={styles.item}>
          <span className={styles.label}>{el.label}</span>
          <span className={styles.percentage}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

StatisticSection.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired
};

StatisticSection.defaultProps = {
  title: 'Upload stats',
};

export default StatisticSection;
