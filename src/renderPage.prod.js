import React from 'react';
import ReactDOM from 'react-dom';
import { resolveDomElement, getPageProps } from './pageUtils';

export default function renderPage(ReactElement, domElement, extraProps) {
  domElement = resolveDomElement(domElement);

  if (!ReactElement) {
    throw new Error('No ReactElement used to render.');
  } else if (typeof ReactElement === 'function') {
    let pageProps = getPageProps(domElement);
    ReactElement = <ReactElement {...pageProps} {...extraProps} />;
  }

  ReactDOM.render(
    ReactElement,
    domElement
  );
}
