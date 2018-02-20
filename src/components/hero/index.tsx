import * as React from 'react';
import styled from 'styled-components';
import { PrimaryButton, DisabledButton, SecondaryButton } from 'components/shared/button';
import { Display4, Subheading } from 'components/shared/typography';
import { Demo } from 'components/demo';
import { Link } from 'components/shared/link';
import { Panels } from 'components/panels';
import { FlexSpacer } from '../shared/flex-spacer';
import { getNodeCallByPayload, NodeCall } from '../../balancer/ducks/nodeBalancer/nodeCalls';
import { RPCNode, store } from 'balancer';
import * as logo from 'assets/imgs/myc_logo.svg';
const addresses = require('assets/json/addresses.json');

let node = RPCNode('');
const Section = styled.div`
  padding: 0px 32px;
  width: 100%;
  max-width: 784px;
  text-align: center;
  z-index: 1;
  > h4 {
    margin-top: 4px;
  }
`;

const DemoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 121px;
  background-color: #eff6fb;
  width: 100%;
`;

const StyledDemoInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  margin: 16px 0px;
  margin-top: 64px;
  padding: 0px 32px;
  width: 100%;
  max-width: 944px;
`;

const Copy = styled.div`
  text-align: left;
  > p {
    margin: initial;
  }
  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;

const BtnWrapper = styled.div`
  @media screen and (max-width: 900px) {
    margin-top: 16px;
  }
`;

const StyledInlineCode = styled.span`
  font-family: 'Roboto Mono';
  color: #007896;
  background-color: #e5ecf3;
  padding: 2px 6px;
  border-radius: 3px;
`;

class DemoInfo extends React.Component<any, any> {
  public state = {
    addresses: addresses.addresses.reduce(
      (accu, curr) => ({ ...accu, [curr]: { status: null, nodeId: null, balance: null } }),
      {}
    ),
    disabled: false
  };

  toggleDisabled() {
    this.setState({
      disabled: !this.state.disabled,
      addresses: addresses.addresses.reduce(
        (accu, curr) => ({ ...accu, [curr]: { status: 'pending', nodeId: null, balance: null } }),
        {}
      )
    });
    setTimeout(() => {
      addresses.addresses.forEach(async (addr: string) => {
        try {
          this.setState({
            ...this.state,
            addresses: {
              ...this.state.addresses,
              [addr]: { status: 'pending' }
            }
          });
          const balance = await node.getBalance(addr);
          const state = store.getState();
          const { nodeId }: NodeCall = getNodeCallByPayload(state, addr);
          this.setState({
            ...this.state,
            addresses: {
              ...this.state.addresses,
              [addr]: { status: 'complete', nodeId: nodeId, balance: balance.toString() }
            }
          });
        } catch (e) {
          this.setState({ [addr]: { status: 'failed' } });
        }
      });
    }, 1500);
  }

  reset() {
    this.setState({
      disabled: false,
      addresses: addresses.addresses.reduce(
        (accu, curr) => ({ ...accu, [curr]: { status: null, nodeId: null, balance: null } }),
        {}
      )
    });
  }

  render() {
    return (
      <React.Fragment>
        <StyledDemoInfoWrapper>
          <Copy>
            <Display4>Shepherd Demo</Display4>
            <Subheading marginAuto={true}>
              Click "start" to begin a node-balanced <StyledInlineCode>getBalance</StyledInlineCode>{' '}
              call for each account address. Open up redux developer tools to view shepherd
              balancing JSON-RPC calls in real-time.
            </Subheading>
          </Copy>
          <FlexSpacer />
          <BtnWrapper>
            {this.state.disabled ? (
              <DisabledButton>Start</DisabledButton>
            ) : (
              <PrimaryButton onClick={() => this.toggleDisabled()}>Start</PrimaryButton>
            )}
            <SecondaryButton onClick={() => this.reset()}>Reset</SecondaryButton>
          </BtnWrapper>
        </StyledDemoInfoWrapper>
        <DemoWrapper>
          <Demo started={this.state.disabled} addresses={this.state.addresses} />
        </DemoWrapper>
      </React.Fragment>
    );
  }
}

export const Hero = () => (
  <React.Fragment>
    <Section>
      <img style={{ height: '64px', width: '64px' }} src={logo} />
      <Display4>MyCrypto: Overflow</Display4>
      <Subheading marginAuto={true}>
        A platform for developer tooling. <br />We’re publishing{' '}
        <Link href="https://www.npmjs.com/~mycrypto-admin"> npm </Link> packages based on internal
        tooling we've developed over the last year of rebuilding{' '}
        <Link href="https://mycrypto.com">MyCrypto.com</Link>.
      </Subheading>
    </Section>
    <Panels />
    <DemoInfo />
  </React.Fragment>
);
