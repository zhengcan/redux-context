import React from 'react';
import ReactDOM from 'react-dom';

export default function renderPage(ReactElement, domElement, props) {
  ReactDOM.render(
    <ReactElement {...props} />,
    domElement
  );
}
