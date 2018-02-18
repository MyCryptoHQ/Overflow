import { RootState } from 'balancer/ducks';
import { getNetworks } from 'balancer/ducks/networkConfigs/selectors';

export const getNetworkConfigs = (state: RootState) => {
  const config = getNetworks(state).config;
  return config;
};
export const getNetworkConfigById = (state: RootState, id: string) =>
  getNetworkConfigs(state)[id];
