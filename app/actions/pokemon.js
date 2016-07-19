import * as Actions from './types';

export function pokemonCountChanged (pokemon, count) {
  return {
    type: Actions.POKEMON_COUNT_CHANGED,
    pokemon,
    count
  };
}

export function candyCountChanged (pokemon, count) {
  return {
    type: Actions.CANDY_COUNT_CHANGED,
    pokemon,
    count
  };
}
