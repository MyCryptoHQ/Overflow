import { RootState } from 'balancer/ducks';
import { getNodeBalancer } from 'balancer/ducks/nodeBalancer/selectors';

export const getWorkers = (state: RootState) => getNodeBalancer(state).workers;

export const getWorkerById = (state: RootState, id: string) =>
  getWorkers(state)[id];
