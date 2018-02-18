import * as React from 'react';
import styled from 'styled-components';
import { LeftAlignBlock } from 'components/shared/blocks';
import { Headline, Subheading } from 'components/shared/typography';

const Title = styled(Headline)``;

export const Info = () => (
  <React.Fragment>
    <LeftAlignBlock>
      <Title>Built For Performance</Title>
      <Subheading>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
        the industry's standard
      </Subheading>
    </LeftAlignBlock>
  </React.Fragment>
);
