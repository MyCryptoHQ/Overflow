import styled from 'styled-components';

export const Display1 = styled.h1`
  font-size: 112px;
  font-weight: 300;
`;
export const Display2 = styled.h2`
  font-size: 56px;
  font-weight: 400;
`;
export const Display3 = styled.h3`
  font-size: 45px;
  font-weight: 400;
`;
export const Display4 = styled.h4`
  font-size: 34px;
  font-weight: 400;
  margin: 16px 0px;
  color: #37343c;
`;

export const Headline = styled.h5`
  font-size: 24px;
  font-weight: 400;
`;

export const Title = styled.h6`
  font-size: 21px;
  font-weight: 400;
`;

export const p = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export interface PSubheading {
  marginAuto?: boolean;
}

export const Subheading = styled.p`
  color: #aab8c5;
  font-size: 16px;
  font-weight: 400;
  max-width: 50ch;
  margin: ${(props: PSubheading) => (props.marginAuto && 'auto') || 0};
  margin-bottom: 36px;
`;
