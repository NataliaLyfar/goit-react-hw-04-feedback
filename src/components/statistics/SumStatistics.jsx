import PropTypes from 'prop-types';
import { FaRegGrinStars, FaJava} from "react-icons/fa";
import { SumStatsList, SumStatsItem } from './Statistics.styled';

const SumStatistics = ({total, positivePercentage}) => {
    return(
        <SumStatsList>
          <SumStatsItem>
          <FaJava/>
            Total: {total}
          </SumStatsItem>
          <SumStatsItem>
            <FaRegGrinStars/>
            Positive feedback: {positivePercentage}%
          </SumStatsItem>
        </SumStatsList>)
};

    SumStatistics.propTypes = {
total: PropTypes.number.isRequired,
positivePercentage: PropTypes.number.isRequired,
};

export default SumStatistics;