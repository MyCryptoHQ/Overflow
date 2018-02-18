import { RootState } from 'balancer/ducks';
import { getNodes } from 'balancer/ducks/nodeConfigs/selectors';

export const getNodeConfigs = (state: RootState) => getNodes(state).config;
export const getNodeConfigById = (state: RootState, id: string) =>
  getNodeConfigs(state)[id];
