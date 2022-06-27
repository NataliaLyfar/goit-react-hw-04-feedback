import styled from 'styled-components';

export const StatisticsBox = styled.section` 
    width: 450px;
    box-shadow: 0 0 10px -1px;
    text-align: center;
    margin: 0 auto;
    background-color: ${p => p.theme.colors.white};
    `;
export const Title = styled.h2` 
    padding: ${p => p.theme.space[5]}px 0;
    color: ${p => p.theme.colors.primary};
    text-transform: uppercase;
    `;
export const StatsticsList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `;
export const StatisticsItem = styled.li`
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1); 
    flex-basis: calc(100% / 5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${p => p.theme.space[4]}px 0;
    cursor: pointer;
    border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
    color: ${p => p.theme.colors.black};
    background-color: ${p => {
        return p.backgroundColor;
      }};
    font-weight: ${p => p.theme.fontWeights.semibold};
    &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};};
    &:hover { 
        transform: scale(1.03);
        }
    `;
export const StatisticsLabel = styled.span`
    font-size: ${p => p.theme.fontSizes.m};
    `;
export const Percentage =styled.span` 
    margin-top: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.fontSizes.l};
    `;
