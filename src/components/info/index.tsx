import * as React from 'react';
import styled from 'styled-components';
import { LeftAlignCard } from 'components/shared/cards';
import { Headline, Subheading } from 'components/shared/typography';

const Title = styled(Headline)``;

export const Info = () => (
  <React.Fragment>
    <LeftAlignCard>
      <Title>Built For Performance</Title>
      <Subheading>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
        the industry's standard
      </Subheading>
    </LeftAlignCard>
  </React.Fragment>
);
