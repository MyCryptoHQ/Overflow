import { RootState } from 'balancer/ducks';
import { getNodeBalancer } from 'balancer/ducks/nodeBalancer/selectors';
import { NodeCall } from 'balancer/ducks/nodeBalancer/nodeCalls';

export const getNodeCalls = (state: RootState) => getNodeBalancer(state).nodeCalls;

export const getNodeCallById = (state: RootState, id: string) => getNodeCalls(state)[id];

export const getNodeCallByPayload = (state: RootState, addr: string) =>
  Object.values(getNodeCalls(state)).find((nodeCall: NodeCall) => nodeCall.rpcArgs[0] === addr);
