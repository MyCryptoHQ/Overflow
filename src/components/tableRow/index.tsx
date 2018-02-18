import * as React from 'react';
import styled from 'styled-components';
import { FlexSpacer } from 'components/shared/flex-spacer';
import { LinearProgress } from 'components/shared/linearProgress';
import { toDataUrl } from 'ethereum-blockies';
import * as triangleRight from 'assets/imgs/triangle-right.svg';
import * as triangleDown from 'assets/imgs/triangle-down.svg';

type Status = 'complete' | 'pending' | 'failed' | null;

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
  height: 36px;
  width: 36px;
  @media screen and (max-width: 725px) {
    height: 24px;
    width: 24px;
  }
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
  white-space: nowrap;
  overflow: hidden;
  > span {
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const StyledArrow = styled.img`
  padding: 8px;
  margin-right: 16px;
  height: 12px;
  width: 12px;
  box-sizing: content-box;
`;

const Arrow: React.SFC<{ open: boolean }> = props => {
  const src = props.open ? triangleDown : triangleRight;
  return <StyledArrow src={src as any} />;
};

interface Props {
  addr: string;
  status: Status;
}

interface State {
  open: boolean;
}

export class TableRow extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { open: false };
  }

  handleClick(status: Status): any {
    if (status === 'complete') {
      this.setState({ open: !this.state.open });
    }
  }

  render() {
    const { addr, status } = this.props;
    const { open } = this.state;
    return (
      <React.Fragment>
        <StyledTableRow onClick={() => this.handleClick(status)}>
          {status === 'complete' && <Arrow open={open} />}
          <WalletWrapper>
            <Icon addr={addr} />
            <AddrWrapper>
              <span>{addr}</span>
              {status === 'pending' && <LinearProgress />}
            </AddrWrapper>
          </WalletWrapper>
          <FlexSpacer />
          <Status status={status}>{status}</Status>
        </StyledTableRow>
        {status === 'complete' && open && <SubComponent />}
      </React.Fragment>
    );
  }
}
