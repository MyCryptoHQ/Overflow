import * as React from 'react';
import styled from 'styled-components';
import { Table } from 'components/table';

const StyledDemo = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
  max-width: 944px;
  margin: 32px;
  margin-top: -105px;
  border: 1px solid #e5e5e5;
`;

export const Demo = () => (
  <StyledDemo>
    <Table />
  </StyledDemo>
);
