import {createSelector} from 'reselect';
import {Pokemon, EvolutionCost} from '../constants/pokemon';
import {currentXPSelector, targetXPSelector} from './experiencePoints';

export const totalsSelector = state => state.totals;
export const pokemonSelector = state => state.totals.pokemon;
export const candySelector = state => state.totals.candy;

export const pidgiesSelector = createSelector(
  currentXPSelector,
  targetXPSelector,
  (currentXP, targetXP) => {
    var required = targetXP - currentXP;
    return Math.ceil(required / EvolutionCost.PIDGY);
  }
)

export const potentialEvolveXPSelector = createSelector(
  pokemonSelector,
  (pokemon) => {
    return Object.keys(pokemon).reduce((map, item) => ({
      ...map,
      [item]: pokemon[item] * 500
    }), {})
  }
);

export const grossEvolveXPSelector = createSelector(
  potentialEvolveXPSelector,
  (potentialEvolveXP) => Object.keys(potentialEvolveXP)
    .reduce((total, pokemon) => total + potentialEvolveXP[pokemon], 0)
);

export const netEvolveXPSelector = createSelector(
  pokemonSelector,
  grossEvolveXPSelector,
  (pokemon, grossEvolveXP) => {

  }
);
