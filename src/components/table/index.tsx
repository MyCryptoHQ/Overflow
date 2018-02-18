import * as React from 'react';
import styled from 'styled-components';
import { TableRow } from 'components/tableRow';
const addresses = require('assets/json/addresses.json');

interface PTable {
  data: any;
}

const StyledTable = styled.div`
  width: inherit;
`;

import { RPCNode, store } from 'balancer';
import { getNodeCallByPayload, NodeCall } from 'balancer/ducks/nodeBalancer/nodeCalls';

let node = RPCNode('');

export class Table extends React.Component<PTable> {
  public state = addresses.addresses.reduce((accu, curr) => ({ ...accu, [curr]: 'pending' }), {});

  public componentDidMount() {
    addresses.addresses.forEach(async (addr: any) => {
      try {
        const balance = await node.getBalance(addr);
        const state = store.getState();
        const { nodeId }: NodeCall = getNodeCallByPayload(state, addr);

        this.setState({ [addr]: 'complete' });
      } catch (e) {
        this.setState({ [addr]: 'failed' });
      }
    });
  }

  render() {
    console.log(this.state);
    return (
      <StyledTable>
        {addresses.addresses.map((addr, i) => {
          return i < 10 && <TableRow key={addr} addr={addr} status={this.state[addr]} />;
        })}
      </StyledTable>
    );
  }
}
