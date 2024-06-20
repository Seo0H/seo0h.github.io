import { ComponentProps } from 'react';

import styled from 'styled-components';

import cvar from '@/utils/cvarAutoComp';

export function Table({ children, ...props }: ComponentProps<'table'>) {
  return (
    <TableWrapper>
      <TableStyle>{children}</TableStyle>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  overflow: hidden;

  width: 100%;

  border-radius: 10px;
  border: 1px solid ${cvar({ key: 'gray', idx: '200' })};
`;

const TableStyle = styled.table`
  width: 100%;
  text-align: center;
  background: white;

  thead {
    font-weight: 600;
    background: ${cvar({ key: 'gray', idx: '100' })};
  }

  td,
  th {
    vertical-align: middle;
    padding: 0.5rem;
  }

  tr {
    border-bottom: 1px solid ${cvar({ key: 'gray', idx: '200' })};
    &:last-child {
      border-bottom: none;
    }
  }
`;
