import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './sass/index.scss';
import 'what-input';
import App from './app';

const root = document.getElementById('root');
const render = (Component: () => JSX.Element) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  );
};

render(App as any);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    const App = require('./app').default;
    render(App);
  });
}
