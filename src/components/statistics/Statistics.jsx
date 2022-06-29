import PropTypes from 'prop-types';
import SumStatistics from './SumStatistics';
import { BasicStatsList, BasicStatsItem } from './Statistics.styled';

const Statistics = ({options, values, total, positivePercentage}) => {
    return(
      <>
        <BasicStatsList>
          {options.map(option => (
            <BasicStatsItem key={option}>
              {option}: {values[option]}
            </BasicStatsItem>
          ))}
        </BasicStatsList>
        <SumStatistics 
        total={total()}
        positivePercentage={positivePercentage()} />
        </>
        )
};

  Statistics.propTypes = {
     options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
     values: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
     total: PropTypes.func.isRequired,
     positivePercentage: PropTypes.func.isRequired,
  };

export default Statistics;