import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { resolveDomElement, getPageProps } from './pageUtils';
import configureStore from './configureStore';
import withRedux from './withRedux';
import renderPage from './renderPage';

class ReduxContext {
  constructor(domElement) {
    this.domElement = resolveDomElement(domElement);
    this.pageProps = getPageProps(this.domElement);
  }
  createHistory(creator) {
    if (this.history) {
      throw new Error('A history object is already existed.');
    }
    if (typeof(creator) === 'function') {
      this.history = creator(this.pageProps);
      if (!this.history) {
        throw new Error('No history is created by creator.');
      }
    } else {
      throw new Error('No invalid creator is provided.');
    }
  }
  ensureHistory() {
    if (!this.history) {
      this.history = createBrowserHistory({
        basename: this.pageProps.basename === '/' ? undefined : this.pageProps.basename
      });
    }
    return this.history;
  }
  configureStore(reducers, initialState) {
    this.ensureHistory();
    this.store = configureStore(reducers, initialState, this.history);
    return this;
  }
  ensureStore() {
    if (!this.store) {
      throw new Error('No redux store has been configured.');
    }
    return this.store;
  }
  replaceReducer(reducers) {
    this.ensureStore();
    this.store.replaceReducer(reducers);
  }
  renderPage(ReactElement, props) {
    this.ensureStore();
    let defaultProps = { store: this.store, history: this.history };
    if (props) {
      props = Object.assign({}, props, defaultProps);
    } else {
      props = defaultProps;
    }
    // if (typeof(ReactElement) === 'function') {
      ReactElement = withRedux(ReactElement);
    // } else if (React.isValidElement(ReactElement)) {
    //   ReactElement = withRedux(ReactElement);
    // }
    renderPage(ReactElement, this.domElement, props);
    return this;
  }
}

export default ReduxContext;
