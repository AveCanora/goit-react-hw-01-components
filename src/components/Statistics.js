import React from "react";
import PropTypes from "prop-types";

const styles = {
  option: {
    display: "inline-block",
    width: 60,
    height: 60,
  },
};

const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      <h1>Секция статистики</h1>
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li
            className="item"
            key={id}
            style={{
              ...styles.option,
              backgroundColor: getRandomColor(),
            }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
