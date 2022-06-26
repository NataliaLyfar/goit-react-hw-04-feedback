import PropTypes from 'prop-types';
import {StatisticsBox, Title, StatsticsList, StatisticsItem, StatisticsLabel, Percentage} from './Statistics.styled';
import {getRandomHexColor} from 'helpers/getRandomColor';
import data from 'data/data.json';

export const Statistics = ({title="Upload stats"}) => {
    return (
      <StatisticsBox>
        {title && <Title>{title}</Title>}
        <StatsticsList  data = {data}>
          {data.map(({id, label, percentage}) =>
          <StatisticsItem backgroundColor={getRandomHexColor()} key={id}> 
           <StatisticsLabel>{label}</StatisticsLabel>
           <Percentage>{percentage}%</Percentage>
          </StatisticsItem>
          )}
        </StatsticsList>
      </StatisticsBox>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    data:  PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
    )
};

