import * as React from 'react';
import styled from 'styled-components';
import { Title, Subheading } from 'components/shared/typography';
import { Link } from 'components/shared/link';
import { FlexSpacer } from '../shared/flex-spacer';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 1250px) {
    flex-wrap: wrap;
  }
  z-index: 1;
  margin: 0px 16px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background: #fff;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e5ecf3;
  border-radius: 5px;
  margin: 16px;
  padding: 16px;
  padding-bottom: 8px;
  max-width: 300px;
  > h6 {
    margin: 0;
    margin-bottom: 8px;
  }
  > p {
    margin-bottom: 0;
    padding-bottom: 8px;
  }
  > a {
    border-top: 1px solid #e5ecf3;
    display: block;
    text-align: center;
    padding: 8px 16px;
  }
`;

export const Panels: React.SFC = () => (
  <StyledWrapper>
    <Card>
      <Title>Shepherd</Title>
      <Subheading>client-side JSON-RPC node²-balancing</Subheading>
      <FlexSpacer />
      <Link href="https://github.com/MyCryptoHQ/shepherd">Github</Link>
    </Card>
    <Card>
      <Title>typ3</Title>
      <Subheading>typesafe smart contract interaction</Subheading>
      <FlexSpacer />
      <Link href="https://github.com/MyCryptoHQ/typ3">Github</Link>
    </Card>
    <Card>
      <Title>typ3-cli</Title>
      <Subheading>auto-generate typescript declaration files</Subheading>
      <FlexSpacer />
      <Link href="https://github.com/MyCryptoHQ/typ3-cli">Github</Link>
    </Card>
    <Card>
      <Title>Drawbridge</Title>
      <Subheading>SPA release management and verification</Subheading>
      <FlexSpacer />
      <Link href="https://github.com/MyCryptoHQ/drawbridge">Github</Link>
    </Card>
  </StyledWrapper>
);
