import React from 'react';
import { AppContainer } from 'react-hot-loader';
import renderPageImpl from './renderPage.prod';
import { resolveDomElement, getPageProps } from './pageUtils';

export default function renderPage(ReactElement, domElement, extraProps) {
  domElement = resolveDomElement(domElement);

  if (typeof ReactElement === 'function') {
    let pageProps = getPageProps(domElement);
    ReactElement = <ReactElement {...pageProps} {...extraProps} />;
  }

  renderPageImpl(
    <AppContainer>
      {ReactElement}
    </AppContainer>,
    domElement
  );
}
