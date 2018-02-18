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

import { RPCNode, store } from 'balancer';
import { getNodeCallByPayload, NodeCall } from 'balancer/ducks/nodeBalancer/nodeCalls';

let node = RPCNode('');

export class Table extends React.Component<PTable> {
  public state = addresses.addresses.reduce(
    (accu, curr) => ({ ...accu, [curr]: { status: null, nodeId: null, balance: null } }),
    {}
  );

  public componentDidUpdate(prev, next) {
    if (!prev.started && prev !== next) {
      addresses.addresses.forEach(async (addr: string) => {
        try {
          this.setState({
            [addr]: { status: 'pending' }
          });
          const balance = await node.getBalance(addr);
          const state = store.getState();
          const { nodeId }: NodeCall = getNodeCallByPayload(state, addr);
          this.setState({
            [addr]: { status: 'complete', nodeId: nodeId, balance: balance.toString() }
          });
        } catch (e) {
          this.setState({ [addr]: { status: 'failed' } });
        }
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <StyledTable>
        {addresses.addresses.map((addr, i) => {
          return (
            i < 15 && (
              <TableRow
                key={addr}
                addr={addr}
                balance={this.state[addr]['balance']}
                node={this.state[addr]['nodeId']}
                status={this.state[addr]['status']}
              />
            )
          );
        })}
      </StyledTable>
    );
  }
}
