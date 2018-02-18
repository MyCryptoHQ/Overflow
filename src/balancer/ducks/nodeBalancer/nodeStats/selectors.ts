import { RootState } from 'balancer/ducks';
import { getNodeBalancer } from 'balancer/ducks/nodeBalancer/selectors';

export const getNodeStats = (state: RootState) =>
  getNodeBalancer(state).nodeStats;

export const getNodeStatsById = (state: RootState, id: string) =>
  getNodeStats(state)[id];
