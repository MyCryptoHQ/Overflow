import * as React from 'react';
import styled from 'styled-components';

const StyledPre = styled.pre`
  background-color: white;
  padding: 32px;
  margin: 0px 32px;
  border-radius: 5px;
  border: 1px solid #e5ecf3;
`;

const StyledCode = styled.code`
  font-family: 'Roboto Mono';
  color: #37343c;
`;

export const Code: React.SFC = ({ children }) => (
  <StyledPre>
    <StyledCode>{children}</StyledCode>
  </StyledPre>
);
