import { RootState } from 'balancer/ducks';
import { getNodeBalancer } from 'balancer/ducks/nodeBalancer/selectors';

export const getBalancerConfig = (state: RootState) =>
  getNodeBalancer(state).balancerConfig;

export const isManualMode = (state: RootState) =>
  getBalancerConfig(state).manual;

export const isOffline = (state: RootState) => getBalancerConfig(state).offline;
