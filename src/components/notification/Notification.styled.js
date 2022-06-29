import styled from 'styled-components';

const Message = styled.p`
margin-top: ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.primary};
`;

export default Message;