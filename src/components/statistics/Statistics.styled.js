import styled from 'styled-components';

export const BasicStatsList = styled.ul`
display: flex;
align-items: center;
justify-content: start;
margin-top: ${p => p.theme.space[2]}px;
`;
export const BasicStatsItem = styled.li`
padding: 0 ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.semibold};
color: ${p => p.theme.colors.primary};
`;
export const SumStatsList = styled.ul`
display: flex;
flex-direction: column;
align-items: start;
margin-top: ${p => p.theme.space[2]}px;
`;
export const SumStatsItem = styled.li`
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