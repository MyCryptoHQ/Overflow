import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import './sass/index.scss';
import 'what-input';
import App from './app';
import { store } from './store';

const root = document.getElementById('root');
const render = (Component: () => JSX.Element) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
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
