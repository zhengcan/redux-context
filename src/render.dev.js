import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

export default function renderPage(ReactElement, domElement, props) {
  ReactDOM.render(
    <AppContainer>
      <ReactElement {...props} />
    </AppContainer>,
    domElement
  );
}
