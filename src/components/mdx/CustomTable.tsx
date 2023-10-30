import { ComponentProps } from 'react';

import styled from 'styled-components';

import cvar from '@/utils/cvarAutoComp';

function CustomTable({ children, ...props }: ComponentProps<'table'>) {
  return (
    <TableWrapper>
      <Table>{children}</Table>
    </TableWrapper>
  );
}

export default CustomTable;

const TableWrapper = styled.div`
  overflow: hidden;

  width: 100%;

  border-radius: 10px;
  border: 1px solid ${cvar({ key: 'gray', idx: '100' })};
`;

const Table = styled.table`
  width: 100%;
  text-align: center;
  background: white;
  table-layout: fixed;

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
    border-bottom: 1px solid ${cvar({ key: 'gray', idx: '100' })};
    &:last-child {
      border-bottom: none;
    }
  }
`;
