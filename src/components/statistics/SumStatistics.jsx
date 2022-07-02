import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaRegGrinStars, FaJava} from "react-icons/fa";

const SumStatsList = styled.ul`
display: flex;
flex-direction: column;
align-items: start;
margin-top: ${p => p.theme.space[2]}px;
`;
const SumStatsItem = styled.li`
display: flex;
align-items: center;
justify-content: start;
padding: 0 ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.semibold};
color: ${p => p.theme.colors.secondary};
svg {
    margin-right: ${p => p.theme.space[1]}px;
} 
`;

export const SumStatistics = ({total, positivePercentage}) => {
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
