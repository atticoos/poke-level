import {combineReducers} from 'redux';
import {Pokemon} from '../constants/pokemon';
import * as Actions from '../actions/types';

const initialState = Object.keys(Pokemon).reduce((map, pokemon) => ({
  ...map,
  [pokemon]: 0
}), {});

export function pokemonCountReducer (state = initialState, action) {
  switch (action.type) {
    case Actions.POKEMON_COUNT_CHANGED:
      return {
        ...state,
        [action.pokemon]: action.count
      };
    default:
      return state;
  }
}

export function candyCountReducer (state = initialState, action) {
  switch (action.type) {
    case Actions.CANDY_COUNT_CHANGED:
      return {
        ...state,
        [action.pokemon]: action.count
      };
    default:
      return state;
  }
}

export default combineReducers({
  pokemon: pokemonCountReducer,
  candy: candyCountReducer
});
