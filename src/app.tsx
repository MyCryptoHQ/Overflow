import * as React from 'react';
import { Nav } from 'components/nav';
import { Hero } from 'components/hero';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Hero />
      </React.Fragment>
    );
  }
}
export default App;
