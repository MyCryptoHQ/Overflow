import * as React from 'react';
import { Nav } from 'components/nav';
import { Hero } from 'components/hero';
import styled from 'styled-components';

const Footer = styled.div`
  padding: 32px;
  font-size: 13px;
  color: #aab8c5;
`;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Hero />
        <Footer>© 2018 MyCrypto, Inc.</Footer>
      </React.Fragment>
    );
  }
}
export default App;
