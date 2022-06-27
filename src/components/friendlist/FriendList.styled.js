import styled from 'styled-components';

export const List = styled.ul`
    width: 310px;
    background-color: ${p => p.theme.colors.white};
    box-shadow: 0 0 10px -1px;
    `;
export const Friend = styled.li` 
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.muted};
    box-shadow: 0 0 10px -1px;
    border-radius: ${p => p.theme.radii.normal};
    cursor: pointer;
    &:hover { 
    transform: scale(1.03);
    }
    `;
export const Status = styled.span`
    width: 15px;
    height: 15px;
    border-radius: ${p => p.theme.radii.round};
    margin-left: ${p => p.theme.space[3]}px;
    display: inline-block;
    background-color: ${p => p.isOnline ? "green" : "red"};
    `;
export const Avatar = styled.img` 
    padding: ${p => p.theme.space[3]}px;
    width: 48px;
    `;
export const FriendName = styled.p`
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    `;

