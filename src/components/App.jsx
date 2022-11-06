import { useState } from 'react';
import { Statistics } from './Statistic/Statistic';
import { FeedbackOptions } from './Feedback/Feedback';
import { Notification } from './Notifcation/Notification';
import { FeedbackContainer } from './FeedbackContainer/FeedbackContainer';

export function App()   {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = target => {
switch (target) {
  case 'good':
    setGood(good + 1);
    break;
  case 'neutral':
      setNeutral(neutral + 1);
      break;
  case 'bad':
        setBad(bad + 1);
        break;

        default:
          return;
}
  };

const  countTotalFeedback = () => {
  return  good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = (good * 100) / countTotalFeedback();
    return Math.round(percentage);
  };

  const typeOfRevies = {good, neutral, bad}

    const options = Object.keys(typeOfRevies);
    const entriesOptions = Object.entries(typeOfRevies);

    return (
      <FeedbackContainer>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={leaveFeedback}
        />
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            options={entriesOptions}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </FeedbackContainer>
    );
  };
