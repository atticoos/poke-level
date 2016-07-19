import {createSelector} from 'reselect';
import {Pokemon, EvolutionCost} from '../constants/pokemon';
import {currentXPSelector, targetXPSelector} from './experiencePoints';

export const pidgiesSelector = createSelector(
  currentXPSelector,
  targetXPSelector,
  (currentXP, targetXP) => {
    var required = targetXP - currentXP;
    return Math.ceil(required / EvolutionCost.PIDGY);
  }
)
