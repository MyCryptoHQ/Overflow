import { RootState } from 'balancer/ducks';
import { getNodeConfigById } from 'balancer/ducks/nodeConfigs/configs';
import { getCurrentNodeId } from 'balancer/ducks/nodeConfigs/currentId';

export const getNodes = (state: RootState) => state.nodeConfigs;

export const getCurrentNodeConfig = (state: RootState) =>
  getNodeConfigById(state, getCurrentNodeId(state));
