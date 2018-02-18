import * as React from 'react';
import styled from 'styled-components';
import * as img from 'assets/imgs/hero.svg';
import { PrimaryButton, SecondaryButton } from 'components/shared/button';
import { Display4, Subheading } from 'components/shared/typography';
import { Demo } from 'components/demo';

const Section = styled.div`
  margin-top: 80px;
  padding: 0px 32px;
  width: 100%;
  max-width: 784px;
  text-align: center;
  z-index: 1;
`;

const HeroImg = styled.div`
  position: relative;
  background: url(${img}) top center no-repeat;
  display: flex;
  justify-content: center;
  margin-top: -64px;
  width: 100%;
  overflow-x: hidden;
`;

export const Hero = () => (
  <React.Fragment>
    <Section>
      <Display4>MyCrypto: Overflow</Display4>
      <Subheading marginAuto={true}>
        A platform for developer tooling. <br/>We’re publishing a series of packages on
        <a href="https://www.npmjs.com/~mycrypto-admin"> npm </a>
        based on internal tooling we've developed over the last year rebuilding{' '}
        <a href="https://mycrypto.com">MyCrypto.com</a>
      </Subheading>
      <PrimaryButton>View Demo</PrimaryButton>
        <SecondaryButton><a href="https://github.com/mycryptohq">GitHub</a></SecondaryButton>
    </Section>
    <HeroImg>
      <Demo />
    </HeroImg>
  </React.Fragment>
);
