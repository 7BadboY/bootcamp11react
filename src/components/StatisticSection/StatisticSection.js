import React from 'react';


const StatisticSection = ({ stats }) => (
  <section className="stats-section">
    <h2 className="title">Upload stats</h2>

    <ul className="stat-list">
      {stats.map(el => (
        <li className="item">
          <span className="label">{el.label}</span>
          <span className="percentage">{el.percentage}%</span>
        </li>
      ))};
      {/* <li className="item">
        <span className="label">.mp3</span>
        <span className="percentage">14%</span>
      </li>
      <li className="item">
        <span className="label">.pdf</span>
        <span className="percentage">41%</span>
      </li>
      <li className="item">
        <span className="label">.mp4</span>
        <span className="percentage">12%</span>
      </li> */}
    </ul>
  </section>
);

export default StatisticSection;
