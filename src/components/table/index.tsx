import * as React from 'react';
import styled from 'styled-components';
import { TableRow } from 'components/tableRow';

interface PTable {
  data: any;
}

const StyledTable = styled.div`
  width: inherit;
  > div {
    max-height: 747px;
  }
`;

export class Table extends React.Component<PTable> {
  render() {
    return (
      <StyledTable>
        <TableRow addr={'0x0a6d9df476577c0d4a24eb50220fad007e444db8'} status={'pending'} />
        <TableRow addr={'0x61edcdf5bb737adffe5043706e7c5bb1f1a56eea'} status={'failed'} />
        <TableRow addr={'0xf4b51b14b9ee30dc37ec970b50a486f37686e2a8'} status={'complete'} />
        <TableRow addr={'0xf27daff52c38b2c373ad2b9392652ddf433303c4'} status={null} />
      </StyledTable>
    );
  }
}
