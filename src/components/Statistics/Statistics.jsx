import React from "react";
import PropTypes from "prop-types";
import { StatConteiner, StatisticItem } from './Statistics.styled';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatConteiner>
    <StatisticItem>
      Good: <span>{good}</span>
    </StatisticItem>
    <StatisticItem>
      Neutral: <span>{neutral}</span>
    </StatisticItem>
    <StatisticItem>
      Bad: <span>{bad}</span>
    </StatisticItem>
    <StatisticItem>
      Total Feedback: <span>{total}</span>
    </StatisticItem>
    <StatisticItem>
      Positive Feedback Percentage: <span>{positivePercentage}%</span>
    </StatisticItem>
  </StatConteiner>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;