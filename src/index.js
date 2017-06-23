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

import ReduxContext from './context';
export function forDOM(domElement) {
  return new ReduxContext(domElement);
}

export default {
  forDOM,
  Actions,
  makeActionGroup,
  makeAjaxAction,
  makeTxAction
}
