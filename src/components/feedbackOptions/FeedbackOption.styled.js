import styled from 'styled-components';

export const ButtonBox = styled.div`
display: flex;
align-items: center;
justify-content: start;
gap: ${p => p.theme.space[4]}px;
margin-top: ${p => p.theme.space[2]}px;
`;
export const Button = styled.button`
transition: all .3s ease;
display: flex;
align-items: center;
justify-content: center;
padding: ${p => p.theme.space[1]}px ${p => p.theme.space[0]}px;
width: 70px;
border: ${p => p.theme.borders.none};
border-radius: ${p => p.theme.radii.normal};
font-family: inherit;
background-color: transparent;
font-size: ${p => p.theme.fontSizes.s};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.primary};
box-shadow: 0 2px 8px rgba(210, 105, 30, 0.7), inset 0 1px rgba(255, 255, 255, 0.3),
      inset 0 10px rgba(255, 255, 255, 0.2), inset 0 10px 20px rgba(255, 255, 255, 0.25),
      inset 0 -15px 30px rgba(210, 105, 30, 0.7);
cursor: pointer;
outline:none;
&:hover { 
transform: scale(1.03);
background-color: ${p => p.theme.colors.accent};
}
`;

