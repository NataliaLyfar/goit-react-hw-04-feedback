import styled from '@emotion/styled';

export const List = styled.ul`
    width: 310px;
    background-color: white;
    box-shadow: 0 0 10px -1px;
    `;
export const Friend = styled.li` 
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px;
    padding: 10px;
    border-width: 1px;
    border-color: grey;
    box-shadow: 0 0 10px -1px;
    border-radius: 5px;
    cursor: pointer;
    &:hover { 
    transform: scale(1.03);
    }
    `;
export const Status = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-left: 10px;
    display: inline-block;
    background-color: ${props => props.isOnline ? "green" : "red"};
    `;
export const Avatar = styled.img` 
    padding: 10px;
    width: 48px;
    `;
export const FriendName = styled.p`
    font-size: 20px;
    font-weight: 500;
    `;

