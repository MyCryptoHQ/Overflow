import * as React from 'react';
import { Nav } from 'components/nav';
import { Hero } from 'components/hero';
import { Info } from 'components/info';


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
