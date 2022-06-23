import styled from '@emotion/styled';

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
    padding: 30px;
    background-color: white;
    `;
export const Avatar = styled.img` 
    display: block;
    width: 180px;
    padding: 15px 0;
    border-radius: 50%;
    box-shadow: 0 0 10px -1px rgba(92, 100, 100, 0.587);
    `;
export const Name = styled.p`
    font-size: 22px;
    font-weight: 700;
    margin-top: 10px;
    `;
export const Tag = styled.p` 
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    color: grey;
    `;
export const Location =styled.p` 
    font-size: 18px;
    font-weight: 500;
    margin-top: 10px;
    color: grey;
    `;
export const StatsList = styled.ul`
    width: 310px;
    list-style: none; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(240, 255, 255, 0.587);
    `;
export const StatsItem = styled.li`
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    flex-basis: calc(100% / 3);
    border: solid 1px rgba(128, 128, 128, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px 0;
    color: grey;
    cursor: pointer;
    &:hover{
    background-color: rgba(128, 128, 128, 0.2);
    }
    `;
export const StatsNumber = styled.span` 
    font-size: 16px;
    font-weight: 500;
    color: black;
    `;
export const StatsLabel = styled.span` 
    font-size: 15px;
    font-weight: 400;
    color: black;
    `;
