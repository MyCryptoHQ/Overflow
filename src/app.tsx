import * as React from 'react';
import { Nav } from 'components/nav';
import { Hero } from 'components/hero';
import { Info } from 'components/info';
import { store, RPCNode } from 'balancer';

window.setTimeout(() => {
  RPCNode('')
    .getBalance('0xd47ca06c4866318ff9680695e39aa3a5bd337fbd')
    .then(x => console.error(x.toString()));
  console.error(store.getState());
}, 2000);

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Hero />
        <Info />
      </React.Fragment>
    );
  }
}
export default App;
