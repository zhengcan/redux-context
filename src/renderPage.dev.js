import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import renderPageImpl from './renderPage.prod';
import pageProps from './pageProps';

export default function renderPage(ReactElement, domElement, extraProps) {
  if (typeof ReactElement === 'function') {
    ReactElement = <ReactElement {...pageProps} {...extraProps} />;
  }
  renderPageImpl(
    <AppContainer>
      {ReactElement}
    </AppContainer>,
    domElement
  );
}
