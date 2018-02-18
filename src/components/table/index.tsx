import * as React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table``;

interface PTable {
  data: any;
}
export class Table extends React.Component<PTable> {
  render() {
    return <StyledTable />;
  }
}
