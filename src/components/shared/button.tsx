import styled from 'styled-components';

export const Button = styled.a`
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 24px;
  border: none;
  background: transparent;
  border-radius: 5px;
  cursor: pointer;
  color: #aab8c5;
  transition: all 0.15s ease-in-out;
  margin: 0px 8px;
  &:hover {
    color: #007896;
    background-color: #eff6fb;
  }
`;

export const PrimaryButton = styled(Button)`
  color: white;
  background-color: #007896;
  background-image: linear-gradient(-180deg, #088fb1 0%, #007896 100%);
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1), inset 0 0 3px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    color: white;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), inset 0 0 3px 0 rgba(0, 0, 0, 0.1);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  }
`;
export const DisabledButton = styled(Button)`
  color: white;
  background-color: #007896;
  background-image: linear-gradient(-180deg, #dbdcdc 0%, #cdd3d6 100%);
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1), inset 0 0 3px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    color: white;
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled(Button)`
  color: #007896;
  border: 1px solid #007896;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1), inset 0 0 3px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), inset 0 0 3px 0 rgba(0, 0, 0, 0.1);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    background-color: #f7fafd;
  }
`;
