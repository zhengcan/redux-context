import * as Actions from './actions';
import configureStore from './configureStore';
import createPage from './createPage';
import renderPage from './renderPage';

export default {
  ...Actions,
  configureStore,
  createPage,
  renderPage,
}
