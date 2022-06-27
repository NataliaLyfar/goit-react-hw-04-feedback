import styled from 'styled-components';

export const Profile = styled.div` 
    margin: 0 auto;
    width: 310px;
    box-shadow: 0 0 10px -1px;
    `;
export const Description = styled.div`
    width: 310px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${p => p.theme.space[6]}px;
    background-color: ${p => p.theme.colors.white};
    `;
export const Avatar = styled.img` 
    display: block;
    width: 180px;
    padding: ${p => p.theme.space[4]}px 0;
    border-radius: ${p => p.theme.radii.round};
    box-shadow: 0 0 10px -1px rgba(92, 100, 100, 0.587);
    `;
export const Name = styled.p`
    font-size: ${p => p.theme.fontSizes.xl};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-top: ${p => p.theme.space[3]}px;
    `;
export const Tag = styled.p` 
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semibold};
    margin-top: ${p => p.theme.space[3]}px;
    color: ${p => p.theme.colors.primary};
    `;
export const Location =styled.p` 
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.semibold};
    margin-top: ${p => p.theme.space[3]}px;
    color: ${p => p.theme.colors.primary};
    `;
export const StatsList = styled.ul`
    width: 310px;
    list-style: none; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${p => p.theme.colors.tertiary};
    `;
export const StatsItem = styled.li`
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    flex-basis: calc(100% / 3);
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.shade};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${p => p.theme.space[5]}px 0;
    color: ${p => p.theme.colors.primary};
    cursor: pointer;
    &:hover{
    background-color: ${p => p.theme.colors.shade};
    }
    `;
export const StatsNumber = styled.span` 
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semibold};
    color: ${p => p.theme.colors.black};
    `;
export const StatsLabel = styled.span` 
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.normal};
    color: ${p => p.theme.colors.black};
    `;
