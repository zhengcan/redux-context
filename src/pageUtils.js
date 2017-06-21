export function resolveDomElement(domElement) {
  if (domElement instanceof Element) {
    // Nice
  } else if (typeof domElement === 'string') {
    domElement = document.querySelector(domElement);
  } else {
    domElement = document.getElementById('page') || document.getElementById('root');
  }
  if (!domElement) {
    throw new Error('Unable to find domElement to render into.');
  }
  return domElement;
}

export function getPageProps(domElement) {
  let pageProps = window.pageProps || {};

  // Merge props from domElement
  if (domElement) {
    domElement = resolveDomElement(domElement);
    if (domElement.dataset) {
      pageProps = Object.assign({}, domElement.dataset, pageProps);
    }
  }

  let basename = pageProps.basename || pageProps.baseUrl;
  if (basename) {
    if (basename !== '/' && basename.endsWith('/')) {
      basename = pageProps.basename = basename.substr(0, basename.length - 1);
    } else {
      pageProps.basename =basename;
    }
  }

  return pageProps;
}
