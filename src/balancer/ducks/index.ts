import { networkConfigs, NetworkConfigState } from 'balancer/ducks/networkConfigs';
import { nodeBalancer, NodeBalancerState } from 'balancer/ducks/nodeBalancer';
import { nodeConfigs, NodeConfigState } from 'balancer/ducks/nodeConfigs';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { nodeBalancer as nodeBalancerSaga } from '../saga';

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  networkConfigs: NetworkConfigState;
  nodeBalancer: NodeBalancerState;
  nodeConfigs: NodeConfigState;
}

export const rootReducer = combineReducers({
  networkConfigs,
  nodeBalancer,
  nodeConfigs
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(nodeBalancerSaga);
