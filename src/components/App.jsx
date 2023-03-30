import { useState } from 'react';
import { Statistics } from 'components/statistics/Statistics';
import { Section } from 'components/section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const base = { good, neutral, bad };

  const clickOfBtn = ({ target: { name } }) => {
    if (name === 'good') {
      setGood(prev => (prev += 1));
    } else if (name === 'neutral') {
      setNeutral(prev => (prev += 1));
    } else if (name === 'bad') {
      setBad(prev => (prev += 1));
    }
  };

  const countFeedback = () => {
    const { good, neutral, bad } = base;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countFeedback()) * 100);
  };

  const filled = () => {
    return Object.values(base).some(value => value > 0);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(base)}
          onLeaveFeedback={clickOfBtn}          
        />
      </Section>
      <Section title="Statistics">
        {filled() ? (
          <Statistics
            good={base.good}
            neutral={base.neutral}                        
            bad={base.bad}
            total={countFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
};
