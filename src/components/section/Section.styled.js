import styled from 'styled-components';

const Subtitle = styled.h2`
font-size: ${p => p.theme.fontSizes.xl};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.secondary};
`;

export default Subtitle;