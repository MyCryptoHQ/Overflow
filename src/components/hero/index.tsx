import * as React from 'react';
import styled from 'styled-components';
import * as img from 'assets/imgs/hero.svg';
import { PrimaryButton, SecondaryButton } from 'components/shared/button';
import { Display4, Subheading } from 'components/shared/typography';

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
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
  height: 800px;
  max-width: 944px;
  padding: 32px;
  margin: 32px;
  margin-bottom: 96px;
  margin-top: 192px;
  border: 1px solid #e5e5e5;
`;

export const Hero = () => (
  <React.Fragment>
    <Section>
      <Display4>Automatic Node Balancer</Display4>
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
