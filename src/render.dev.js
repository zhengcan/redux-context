import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

export default function renderPage(ReactElement, domElement, props, containerProps) {
  ReactDOM.render(
    <AppContainer {...containerProps}>
      <ReactElement {...props} />
    </AppContainer>,
    domElement
  );
}
