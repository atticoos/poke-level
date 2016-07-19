import * as Actions from '../actions/types';

export default function doubleXPReducer(enabled = false, action) {
  switch (action.type) {
    case Actions.DOUBLE_XP_ENABLED:
      return true;
    case Actions.DOUBLE_XP_DISABLED:
      return false;
    default:
      return enabled;
  }
}
