import styled from 'styled-components';

const Title = styled.h1`
font-size: ${p => p.theme.fontSizes.xxl};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.primary};
`;

export default Title;