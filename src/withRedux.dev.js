import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import DevTools from './DevTools';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

export default function withRedux(ReactElement) {
  class ReduxContainer extends React.Component {
    static displayName = "withRedux"
    static propTypes = {
      store: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
    }
    render() {
      let { store, history, ...rest } = this.props;
      return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
              <ReactElement {...rest} />
              <DevTools />
            </div>
          </ConnectedRouter>
        </Provider>
      );
    }
  }

  return ReduxContainer;
}
