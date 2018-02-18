import * as React from 'react';
import styled from 'styled-components';
import * as img from 'assets/imgs/hero.svg';
import { PrimaryButton, SecondaryButton } from 'components/shared/button';
import { Headline, Subheading } from 'components/shared/typography';

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

const Demo = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1), inset 0 0 3px 0 rgba(0, 0, 0, 0.1);
  height: 800px;
  max-width: 784px;
  padding: 32px;
  margin: 32px;
  margin-top: 192px;
  border: 1px solid #00000019;
`;

export const Hero = () => (
  <React.Fragment>
    <Section>
      <Headline>Automatic Node Balancer</Headline>
      <Subheading marginAuto={true}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
        the industry's standard
      </Subheading>
      <PrimaryButton>Get Started</PrimaryButton>
      <SecondaryButton>Documentation</SecondaryButton>
    </Section>
    <HeroImg>
      <Demo />
    </HeroImg>
  </React.Fragment>
);
