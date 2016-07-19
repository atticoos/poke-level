import * as Actions from '../actions/types';

const initialState = {
  currentXP: 0,
  targetXP: 0
};

export default function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.CURRENT_XP_CHANGED:
      return {
        ...state,
        currentXP: parseInt(action.value)
      };
    case Actions.TARGET_XP_CHANGED:
      return {
        ...state,
        targetXP: parseInt(action.value)
      };
    default:
      return state;
  }
}
