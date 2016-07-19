import * as Actions from './types';

export function currentXPChanged (value) {
  return {
    type: Actions.CURRENT_XP_CHANGED,
    value
  };
}

export function targetXPChanged (value) {
  return {
    type: Actions.TARGET_XP_CHANGED,
    value
  };
}

export function enableDoubleXP () {
  return {
    type: Actions.DOUBLE_XP_ENABLED
  };
}

export function disableDoubleXP () {
  return {
    type: Actions.DOUBLE_XP_DISABLED
  };
}
