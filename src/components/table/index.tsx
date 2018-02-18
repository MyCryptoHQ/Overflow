import * as React from 'react';
import styled from 'styled-components';
import { TableRow } from 'components/tableRow';
const addresses = require('assets/json/addresses.json');

interface PTable {
  started: boolean;
}

const StyledTable = styled.div`
  width: inherit;
`;



export class Table extends React.Component<PTable> {
  render() {
    console.log(this.props);
    return (
      <StyledTable>
        {addresses.addresses.map((addr, i) => {
          return (
            i < 15 && (
              <TableRow
                key={addr}
                addr={addr}
                balance={this.props.addresses[addr]['balance']}
                node={this.props.addresses[addr]['nodeId']}
                status={this.props.addresses[addr]['status']}
              />
            )
          );
        })}
      </StyledTable>
    );
  }
}
