import RPCNode from '../rpc';
import RPCClient from '../rpc/client';
import { CustomNodeConfig } from 'balancer/types/nodes';
import { Omit } from 'balancer/types';

export default class CustomNode extends RPCNode {
  constructor(config: Omit<CustomNodeConfig, 'lib'>) {
    super(config.id);

    const headers: { [key: string]: string } = {};
    if (config.auth) {
      const { username, password } = config.auth;
      headers.Authorization = `Basic ${btoa(`${username}:${password}`)}`;
    }

    this.client = new RPCClient(config.id, headers);
  }
}
