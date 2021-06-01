import React from "react";
import PropTypes from "prop-types";
const Statistics = ({ stats, title }) => (
  <section className="statistics">
    <h1>Профиль социальной сети</h1>
    <h2 className="title">{title}</h2>
    <ul className="stat-list">
      {stats.map((stat) => (
        <li className="item" key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default Statistics;
