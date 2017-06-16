import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

export default function createPage(ReactElement) {
  class ReduxContainer extends React.Component {
    static propTypes = {
      store: PropTypes.object.isRequired,
    }
    render() {
      let { store, ...rest } = this.props;
      return (
        <Provider store={store}>
          <ReactElement {...rest} />
        </Provider>
      );
    }
  }

  return ReduxContainer;
}
