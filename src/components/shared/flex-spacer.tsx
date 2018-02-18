import * as React from 'react';
import styled from 'styled-components';

const TDSpacer = styled.td`
  flex-grow: 1;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

export const TDFlexSpacer: React.SFC = () => <TDSpacer />;
export const FlexSpacer: React.SFC = () => <Spacer />;
