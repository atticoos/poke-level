import {createSelector, createStructuredSelector} from 'reselect';
import {currentXPSelector, targetXPSelector, doubleXPSelector} from './experiencePoints';
import {pidgiesSelector, totalsSelector, grossEvolveXPSelector} from './pokemon';

export default createStructuredSelector({
  currentXP: currentXPSelector,
  targetXP: targetXPSelector,
  doubleXP: doubleXPSelector,
  pidgies: pidgiesSelector,
  totals: totalsSelector,
  grossEvolveXP: grossEvolveXPSelector
});
