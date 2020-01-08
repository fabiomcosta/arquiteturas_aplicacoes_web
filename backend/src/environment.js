import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { fetchQuery } from './utils';

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
