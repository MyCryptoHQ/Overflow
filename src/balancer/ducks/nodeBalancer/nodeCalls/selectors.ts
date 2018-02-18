import { RootState } from 'balancer/ducks';
import { getNodeBalancer } from 'balancer/ducks/nodeBalancer/selectors';

export const getNodeCalls = (state: RootState) =>
  getNodeBalancer(state).nodeCalls;

export const getNodeCallById = (state: RootState, id: string) =>
  getNodeCalls(state)[id];
