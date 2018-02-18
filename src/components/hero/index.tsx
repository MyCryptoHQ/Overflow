import * as React from 'react';
import styled from 'styled-components';
import { PrimaryButton, DisabledButton, SecondaryButton } from 'components/shared/button';
import { Display4, Subheading } from 'components/shared/typography';
import { Demo } from 'components/demo';
import { Link } from 'components/shared/link';
import { Panels } from 'components/panels';
import { FlexSpacer } from '../shared/flex-spacer';

const Section = styled.div`
  margin-top: 16px;
  padding: 0px 32px;
  width: 100%;
  max-width: 784px;
  text-align: center;
  z-index: 1;
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

class DemoInfo extends React.Component<any, any> {
  state = {
    disabled: false,
    reset: false
  };

  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled });
  }

  reset() {
    this.setState({ disabled: false });
  }

  render() {
    return (
      <React.Fragment>
        <StyledDemoInfoWrapper>
          <Copy>
            <Display4>Shepherd Demo</Display4>
            <Subheading marginAuto={true}>
              Click "start" to begin a node-balanced `getBalance` call for each account address. Open up redux developer tools to view shepherd balancing JSON-RPC calls in real-time.
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
          <Demo started={this.state.disabled} reset={this.state.reset} />
        </DemoWrapper>
      </React.Fragment>
    );
  }
}

export const Hero = () => (
  <React.Fragment>
    <Section>
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
