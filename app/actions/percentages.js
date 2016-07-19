import * as Actions from './types';

export function pokemonPercentageChanged (pokemon, percent) {
  return {
    type: Actions.POKEMON_PERCENTAGE,
    pokemon,
    percent
  };
}
