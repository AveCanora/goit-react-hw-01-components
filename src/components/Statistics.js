import React from "react";
import PropTypes from "prop-types";
function randomColor (
  r =  Math.floor(Math.random() * 100),
  g= Math.floor(Math.random() * 100),
  b= Math.floor(Math.random() * 100),
);
const styles = {
  option: {
    display: "inline-block",
    width: 40,
    height: 40,
  },
};
const Statistics = ({ stats, title }) => (
  <section className="statistics">
    <h1>Секция статистики</h1>
    <h2 className="title">{title}</h2>
    <ul className="stat-list">
      {stats.map((stat) => (
        <li
          className="item"
          key={stat.id}
          style={{
            ...styles.option,
            backgroundColor:
              "rgb(" +
              randomColor.r +
              "," +
              randomColor.g +
              "," +
              randomColor.b,
          }}
        >
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
