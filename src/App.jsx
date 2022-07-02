import React from 'react';
import { Container } from 'components/container';
import { Header } from 'components/header';
import { Section } from 'components/section';
import { FeedbackOptions } from 'components/feedbackOptions';
import { Statistics }from 'components/statistics';
import { Notification } from 'components/notification';



export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
handleSetFeedback = (e) => {
  const  { id } = e.target;
  this.setState(prevState => ({
  [id]: prevState[id] + 1,
}));
};

countTotalFeedback = () => {
  const arrValues = Object.values(this.state);
  const total = arrValues.reduce((prev, current) => prev + current, 0);
  return total;
};

countPositiveFeedbackPercentage = () => {
  const {good} = this.state;
  return good ? Math.round((good / this.countTotalFeedback()) * 100) : 0;
};

options = Object.keys(this.state);
render() {
 const state = this.state;
 const options = this.options;
  return (
    <Container>
      <Header title={"Expresso Cafe Feedback Page"}/>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions 
          options = {options} 
          onLeaveFeedback = {this.handleSetFeedback} />
      </Section>
      <Section title={"Statistics"}>
        {this.countTotalFeedback() > 0 ? (
        <Statistics
         options = {options}
         values = {state}
         total = {this.countTotalFeedback}
         positivePercentage = {this.countPositiveFeedbackPercentage}
        />
        ) : (
        <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
    );
  };
};