import styled from 'styled-components';

export const TransactionsTable = styled.table`
  width: 872px;
  text-align: center;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0 0 10px -1px;
  overflow: hidden;
  border-collapse: collapse;
  background-color: ${p => p.theme.colors.white};
  `;
export const TableHead = styled.thead`
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.secondary};
  text-transform: uppercase;
  `;
export const TableBody = styled.tbody` 
  color: ${p => p.theme.colors.text};
  `;
export const TableRaw = styled.tr` 
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  };
  &:nth-of-type(2n) {
    background-color: ${p => p.theme.colors.shadow};
  }
  &:hover, &:nth-of-type(2n):hover {
    background-color: ${p => p.theme.colors.hoverShadow};
  };
  `;
  export const HeadCell = styled.th`
  padding: ${p => p.theme.space[3]}px;
  &:not(:last-child) {
      border-right: 1px solid #e4e4e4;
    }
  `;
  export const TableData = styled.th`
  padding: ${p => p.theme.space[3]}px;
  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  }
  `;
