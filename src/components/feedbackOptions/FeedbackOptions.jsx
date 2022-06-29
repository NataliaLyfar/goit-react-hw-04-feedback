import PropTypes from 'prop-types';
import {ButtonBox, Button } from './FeedbackOption.styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ButtonBox>
          {options.map(option => (
             <Button
             key = {option}
             type='button'
             onClick={onLeaveFeedback}
             id = {option}
             >
             {option}
             </Button>
        ))}
        </ButtonBox>
      )
  };

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,  
};

export default FeedbackOptions;