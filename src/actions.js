import _ from 'lodash';

class ActionGroup {
  constructor(name, ...ops) {
    this._name = name;
    let prefix = this._name + '.';
    _.forEach(ops, op => this[op] = prefix + op);
  }
  clone() {
    return _.assign(new ActionGroup(this._name), this);
  }
  extend(...ops) {
    if (ops.length === 0) {
      return this;
    }
    let cloned = this.clone();
    let prefix = this._name + '.';
    _.forEach(ops, op => cloned[op] = prefix + op);
    return cloned;
  }
  bind(params) {
    if (params) {
      let cloned = this.clone();
      let clonedParams = cloned.params = {};
      _.assign(clonedParams, params);
      return cloned;
    } else {
      return this;
    }
  }
}

export function makeActionGroup(name, ...ops) {
  return new ActionGroup(name, ...ops);
}

export const INIT    = 'INIT';
export const QUERY   = 'QUERY';
export const SUCCESS = 'SUCCESS';
export const ERROR   = 'ERROR';
export function makeAjaxAction(name, ...ops) {
  return new ActionGroup(name, INIT, QUERY, SUCCESS, ERROR, ...ops);
}

export const BEGIN  = 'BEGIN';
export const UPDATE = 'UPDATE';
export const COMMIT = 'COMMIT';
export const CANCEL = 'CANCEL';
export function makeTxAction(name, ...ops) {
  return new ActionGroup(name, BEGIN, UPDATE, COMMIT, CANCEL, ...ops);
}
