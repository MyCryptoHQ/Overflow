import * as React from 'react';
import { toDataUrl } from 'ethereum-blockies';
import styled from 'styled-components';
import { TDFlexSpacer } from 'components/shared/flex-spacer';
import { LinearProgress } from 'components/shared/linearProgress';

const StyledTable = styled.table`
  width: inherit;
`;
const StyledTableRow = styled.tr`
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
  & > td {
    display: flex;
    align-items: center;
    & > img {
      margin-right: 16px;
    }
  }
`;

const WalletWrapper = styled.td`
  width: 100%;
`;

const StyledBlockie = styled.img`
  border-radius: 5px;
  height: 48px;
  width: 48px;
`;

type Status = 'complete' | 'pending' | 'failed' | null;

interface PStatus {
  status: Status;
}
const Status = styled.td`
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

interface PTable {
  data: any;
}

interface PTableRow {
  addr: string;
  status: Status;
}

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

const TableRow = (props: PTableRow) => {
  return (
    <StyledTableRow>
      <WalletWrapper>
        <Icon addr={props.addr} />
        <AddrWrapper>
          {props.addr}
          {props.status === 'pending' && <LinearProgress />}
        </AddrWrapper>
      </WalletWrapper>
      <TDFlexSpacer />
      <Status status={props.status}>{props.status}</Status>
    </StyledTableRow>
  );
};

export class Table extends React.Component<PTable> {
  render() {
    return (
      <StyledTable>
        <thead />
        <tbody>
          <TableRow addr={'0x0a6d9df476577c0d4a24eb50220fad007e444db8'} status={'pending'} />
          <TableRow addr={'0x61edcdf5bb737adffe5043706e7c5bb1f1a56eea'} status={'failed'} />
          <TableRow addr={'0xf4b51b14b9ee30dc37ec970b50a486f37686e2a8'} status={'complete'} />
          <TableRow addr={'0xf27daff52c38b2c373ad2b9392652ddf433303c4'} status={null} />
        </tbody>
      </StyledTable>
    );
  }
}
