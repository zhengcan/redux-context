import React from 'react';
import IndexPage from './IndexPage';
import renderPage from '../src/renderPage';
import reducers from './reducers';
import configureStore from '../src/configureStore';

let store = configureStore(reducers);
if (module.hot) {
  module.hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers').default)
  );
}

renderPage(IndexPage, null, { store });

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./IndexPage', () => {
    renderPage(IndexPage, null, { store });
  });
}
