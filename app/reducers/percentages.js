import * as Actions from '../actions/types';
import {Pokemon} from '../constants/pokemon';

const initialState = Object.keys(Pokemon).reduce((map, pokemon) => ({
  ...map,
  [pokemon]: 0
}), {});

export default function percentageReducer (state = initialState, action) {
  switch (action.type) {
    case Actions.POKEMON_PERCENTAGE:
      return {
        ...state,
        [action.pokemon]: action.percent
      };
    default:
      return state;
  }
}
