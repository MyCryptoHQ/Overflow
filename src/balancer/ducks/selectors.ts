import { RootState } from 'balancer/ducks';
import { getCurrentNetworkId } from 'balancer/ducks/networkConfigs/currentId';
import { getNodeConfigs } from 'balancer/ducks/nodeConfigs/configs';
import { NodeConfig } from 'balancer/types/nodes';

export const getAllNodesOfCurrentNetwork = (state: RootState) => {
  const allNodesOfNetworkId: { [key: string]: NodeConfig } = {};
  const networkId = getCurrentNetworkId(state);
  const nodeConfigs = getNodeConfigs(state);

  return Object.entries(nodeConfigs).reduce(
    (allNodes, [currNodeId, currNodeConfig]) => {
      if (currNodeConfig.network !== networkId) {
        return allNodes;
      }
      return { ...allNodes, [currNodeId]: currNodeConfig };
    },
    allNodesOfNetworkId,
  );
};
