import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SumStatistics } from './SumStatistics';

const BasicStatsList = styled.ul`
display: flex;
align-items: center;
justify-content: start;
margin-top: ${p => p.theme.space[2]}px;
`;
const BasicStatsItem = styled.li`
padding: 0 ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.semibold};
color: ${p => p.theme.colors.primary};
`;

export const Statistics = ({options, values, total, positivePercentage}) => {
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

