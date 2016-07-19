import * as Actions from './types';

export function currentXPChanged (value) {
  console.log('value', value)
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
