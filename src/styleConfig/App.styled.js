import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.background};
  font-family: ${p => p.theme.fonts.body};
  `;
