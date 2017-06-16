import React from 'react';
import IndexPage from './IndexPage';
import renderPage from '../src/renderPage';
import reducers from './reducers';
import configureStore from '../src/configureStore';
import createHistory from 'history/createBrowserHistory';

let history = createHistory();

let store = configureStore(reducers, null, history);

renderPage(IndexPage, null, { store, history });

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers').default)
  );
  module.hot.accept('./IndexPage', () => {
    renderPage(IndexPage, null, { store, history });
  });
}
