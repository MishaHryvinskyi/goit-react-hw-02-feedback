import React, { Component } from "react";

class Statistics extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    feedback: {
      good: 0,
      neutral: 0,
      bad: 0
    }
  };

  handleGoodClick = () => {
    this.setState((prevState) => ({
      feedback: {
        ...prevState.feedback,
        good: prevState.feedback.good + 1
      }
    }));
  };
  
  handleNeutralClick = () => {
    this.setState((prevState) => ({
      feedback: {
        ...prevState.feedback,
        neutral: prevState.feedback.neutral + 1
      }
    }));
  };
  
  handleBadClick = () => {
    this.setState((prevState) => ({
      feedback: {
        ...prevState.feedback,
        bad: prevState.feedback.bad + 1
      }
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state.feedback;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state.feedback;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  }

  render() {
    const { feedback } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <section>
          <h2>Please leave feedback</h2>
          <div>
            <button onClick={this.handleGoodClick}>Good</button>
            <button onClick={this.handleNeutralClick}>Neutral</button>
            <button onClick={this.handleBadClick}>Bad</button>
          </div>
        </section>
        <section>
          <h2>Statistics</h2>
          {totalFeedback > 0 ? (
            <div>
              <p>
                Good: <span>{feedback.good}</span>
              </p>
              <p>
                Neutral: <span>{feedback.neutral}</span>
              </p>
              <p>
                Bad: <span>{feedback.bad}</span>
              </p>
              <p>
                Total Feedback: <span>{totalFeedback}</span>
              </p>
              <p>
                Positive Feedback Percentage:{" "}
                <span>{positiveFeedbackPercentage}%</span>
              </p>
            </div>
          ) : (
            <p>No feedback given yet.</p>
          )}
        </section>
      </div>
    );
  }
}

export default Statistics;