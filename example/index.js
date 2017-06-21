import React from 'react';
import ReduxContext from '../src';
import IndexPage from './IndexPage';
import reducers from './reducers';

let context = ReduxContext
  .forDOM()
  .configureStore(reducers)
  .renderPage(IndexPage);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./reducers', () =>
    context.replaceReducer(require('./reducers').default)
  );
  module.hot.accept('./IndexPage', () => {
    context.renderPage(IndexPage);
  });
}
