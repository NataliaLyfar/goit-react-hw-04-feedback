import styled from 'styled-components';
import CoffeePic from 'asset/background.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: ${p => p.theme.space[4]}px;
  padding-top: 5vh;
  padding-left: 20vw;
  background-image: url(${CoffeePic});
  background-color: ${p => p.theme.colors.background};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: ${p => p.theme.fonts.body};
  `;
