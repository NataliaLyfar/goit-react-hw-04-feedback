import {useState} from 'react';
import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics }from 'components/Statistics';
import { Notification } from 'components/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0});

  const options = Object.keys(feedback);

  const handleSetFeedback = option => 
    setFeedback(prevState => ({
    ...prevState,
    [option]: prevState[option] + 1,
    }));
  
  const countTotalFeedback = () => Object.values(feedback).reduce((value, acc) => acc + value, 0);
  
  const countPositiveFeedbackPercentage = () => Math.round((feedback.good / countTotalFeedback()) * 100);

  return (
    <Container>
      <Header title={"Expresso Cafe Feedback Page"}/>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions 
          options = {options} 
          onLeaveFeedback = {handleSetFeedback} />
      </Section>
      <Section title={"Statistics"}>
        {countTotalFeedback() > 0 ? 
        <Statistics
          options = {options}
          values = {feedback}
          total = {countTotalFeedback}
          positivePercentage = {countPositiveFeedbackPercentage}/>
        : 
        <Notification message="There is no feedback" />}
      </Section>
    </Container>
  );
};
