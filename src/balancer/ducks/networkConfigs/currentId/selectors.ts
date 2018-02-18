import { RootState } from 'balancer/ducks';
import { getNetworks } from '../';

export const getCurrentNetworkId = (state: RootState) => {
  console.log(state);
  return getNetworks(state).currentId;
};
