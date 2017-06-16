import React from 'react';
import ReactDOM from 'react-dom';
import pageProps from './pageProps';

export default function renderPage(ReactElement, domElement, extraProps) {
  if (!ReactElement) {
    throw Error('No ReactElement used to render.');
  } else if (typeof ReactElement === 'function') {
    ReactElement = <ReactElement {...pageProps} {...extraProps} />;
  }

  if (domElement instanceof Element) {
    // Nice
  } else if (typeof domElement === 'string') {
    domElement = document.querySelector(domElement);
  } else {
    domElement = document.getElementById('page') || document.getElementById('root');
  }
  if (!domElement) {
    throw Error('Unable to find domElement to render into.');
  }

  ReactDOM.render(
    ReactElement,
    domElement
  );
}
