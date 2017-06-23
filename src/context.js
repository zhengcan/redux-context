import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { resolveDomElement, getPageProps } from './pageUtils';
import configureStore from './configureStore';
import withRedux from './withRedux';
import render from './render';

class ReduxContext {
  constructor(domElement) {
    this.domElement = resolveDomElement(domElement);
    this.defaultProps = getPageProps(this.domElement);
  }
  createHistory(creator) {
    if (this.history) {
      throw new Error('A history object is already existed.');
    }
    if (typeof(creator) === 'function') {
      this.history = creator(this.defaultProps);
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
        basename: this.defaultProps.basename === '/' ? undefined : this.defaultProps.basename
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
  render(ReactElement, props) {
    this.ensureStore();
    let mergedProps = Object.assign(
      {},
      this.defaultProps,
      props,
      { store: this.store, history: this.history }
    );
    render(withRedux(ReactElement), this.domElement, mergedProps);
    return this;
  }
}

export default ReduxContext;
