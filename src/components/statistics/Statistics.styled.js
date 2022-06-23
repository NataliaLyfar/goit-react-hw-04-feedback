import styled from '@emotion/styled';

export const StatisticsBox = styled.section` 
    width: 450px;
    box-shadow: 0 0 10px -1px;
    text-align: center;
    margin: 0 auto;
    background-color: #fff;
    `;
export const Title = styled.h2` 
    padding: 25px 0;
    color: grey;
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
    padding: 15px 0;
    cursor: pointer;
    border-top: solid 1px rgba(220, 217, 217, 0.533);
    color: black;
    background-color: ${props => {
        return props.backgroundColor;
      }};
    font-weight: 500;
    &:not(:last-child) {
    border-right: solid 1px rgba(220, 217, 217, 0.533);};
    &:hover { 
        transform: scale(1.03);
        }
    `;
export const StatisticsLabel = styled.span`
    font-size: 15px;
    `;
export const Percentage =styled.span` 
    margin-top: 5px;
    font-size: 20px;
    `;
