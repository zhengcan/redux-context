import createBrowserHistory from 'history/createBrowserHistory';
import { resolveDomElement, getPageProps } from './pageUtils';

export default function createHistory() {
  const domElement = resolveDomElement();
  const pageProps = getPageProps(domElement);
  return createBrowserHistory({
    basename: pageProps.basename
  });
}
