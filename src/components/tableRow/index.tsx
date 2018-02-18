import * as React from 'react';
import styled from 'styled-components';
import { FlexSpacer } from 'components/shared/flex-spacer';
import { LinearProgress } from 'components/shared/linearProgress';
import { toDataUrl } from 'ethereum-blockies';

type Status = 'complete' | 'pending' | 'failed' | null;

interface PTableRow {
  addr: string;
  status: Status;
}

const StyledTableRow = styled.div`
  display: flex;
  align-items: center;
  color: #37343c;
  padding: 16px;
  transition: all 0.15s ease-in-out;
  &:hover {
    background-color: #eff6fb;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #e5e5e5;
  }
  & > div {
    display: flex;
    align-items: center;
    & > img {
      margin-right: 16px;
    }
  }
`;

const WalletWrapper = styled.div`
  width: 100%;
`;

const StyledBlockie = styled.img`
  border-radius: 5px;
  height: 48px;
  width: 48px;
`;

const SubComponent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;
  padding: 16px 0px;
  border-bottom: 1px solid #e5e5e5;
`;

interface PStatus {
  status: Status;
}
const Status = styled.div`
  display: ${(props: PStatus) =>
    props.status === null || props.status === 'pending' ? 'none !important' : 'block'};
  color: white;
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  padding: 8px 12px;
  border-radius: 5px;
  background-color: ${(props: PStatus) => (props.status === 'complete' ? '#76D470' : '#EC4D3D')};
`;

const Icon: React.SFC<{ addr: string }> = props => {
  const src = toDataUrl(props.addr);
  return <StyledBlockie src={src} />;
};

const AddrWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: inherit;
`;

export const TableRow: React.SFC<PTableRow> = props => (
  <React.Fragment>
    <StyledTableRow>
      <WalletWrapper>
        <Icon addr={props.addr} />
        <AddrWrapper>
          {props.addr}
          {props.status === 'pending' && <LinearProgress />}
        </AddrWrapper>
      </WalletWrapper>
      <FlexSpacer />
      <Status status={props.status}>{props.status}</Status>
    </StyledTableRow>
    {props.status === 'complete' && <SubComponent />}
  </React.Fragment>
);
