import styled from 'styled-components';

export const Button = styled.a`
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  padding: 16px 24px;
  border: none;
  background: transparent;
  border-radius: 5px;
  cursor: pointer;
  color: #aab8c5;
  transition: all 0.15s ease-in-out;
  margin: 0px 8px;
  &:hover {
    color: #0090ff;
    background-color: #eff6fb;
  }
`;

export const PrimaryButton = styled(Button)`
  color: white;
  background-color: #0090ff;
  background-image: linear-gradient(-180deg, #0090ff 0%, #0085eb 100%);
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1), inset 0 0 3px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    color: white;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2),
      inset 0 0 3px 0 rgba(0, 0, 0, 0.1);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const SecondaryButton = styled(Button)`
  color: #0090ff;
  border: 1px solid #0090ff;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1), inset 0 0 3px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2),
      inset 0 0 3px 0 rgba(0, 0, 0, 0.1);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    background-color: #f7fafd;
  }
`;
