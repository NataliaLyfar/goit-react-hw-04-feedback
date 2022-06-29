import styled from 'styled-components';
import CoffeePic from './mixed-coffee-cups-with-a-leaf-on-a-white-wooden-textured-wallpaper-min.jpg';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: ${p => p.theme.space[4]}px;
  padding-top: 5vh;
  padding-left: 20vw;
  background-image: url(${CoffeePic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: ${p => p.theme.fonts.body};
  `;

  export default Container;