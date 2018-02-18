import * as React from 'react';
import { Nav } from 'components/nav';
import { Hero } from 'components/hero';
import { Info } from 'components/info';
import * as z from 'hyz-shepherd';

window.setTimeout(() => {
  console.error(z);
  const node = RPCNode();
  node.ping().then(x => console.log(x));
}, 1000);

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
