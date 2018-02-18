import { RootState } from 'balancer/ducks';
import { getNodes } from 'balancer/ducks/nodeConfigs/selectors';

export const getCurrentNodeId = (state: RootState) => getNodes(state).currentId;
