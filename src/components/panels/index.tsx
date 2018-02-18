import * as React from 'react';
import styled from 'styled-components';
import { Title, Subheading } from 'components/shared/typography';
import { Link } from 'components/shared/link';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
  z-index: 1;
  margin: 0px 16px;
`;

const Card = styled.div`
  text-align: left;
  background: #fff;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e5ecf3;
  border-radius: 5px;
  margin: 16px;
  padding: 16px;
  max-width: 300px;
  > h6 {
    margin: 0;
    margin-bottom: 4px;
  }
  > p {
    margin-bottom: 0;
    padding-bottom: 8px;
    border-bottom: 1px solid #e5ecf3;
  }
  > a {
    display: block;
    text-align: center;
    margin-top: 8px;
    padding: 0px 16px;
  }
`;

export const Panels: React.SFC = () => (
  <StyledWrapper>
    <Card>
      <Title>Built For Performance</Title>
      <Subheading>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Subheading>
      <Link href="/">Github</Link>
    </Card>
    <Card>
      <Title>Built For Performance</Title>
      <Subheading>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Subheading>
      <Link href="/">Github</Link>
    </Card>
    <Card>
      <Title>Built For Performance</Title>
      <Subheading>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Subheading>
      <Link href="/">Github</Link>
    </Card>
  </StyledWrapper>
);
