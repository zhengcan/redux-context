import * as _Actions from './actions';
const {
  makeActionGroup: _makeActionGroup,
  makeAjaxAction: _makeAjaxAction,
  makeTxAction: _makeTxAction,
  ...rest
} = _Actions;
export const Actions = rest;
export const makeActionGroup = _makeActionGroup;
export const makeAjaxAction = _makeAjaxAction;
export const makeTxAction = _makeTxAction;

import _createHistory from './createHistory';
export const createHistory = _createHistory;

import _configureStore from './configureStore';
export const configureStore = _configureStore;

import _withRedux from './withRedux';
export const withRedux = _withRedux;

import _renderPage from './renderPage';
export const renderPage = _renderPage;

import ReduxContext from './context';
function forDOM(domElement) {
  return new ReduxContext(domElement);
}

export default {
  forDOM,
  Actions,
  makeActionGroup,
  makeAjaxAction,
  makeTxAction,
  createHistory,
  configureStore,
  withRedux,
  renderPage,
}
