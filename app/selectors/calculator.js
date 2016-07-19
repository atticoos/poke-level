import {createSelector, createStructuredSelector} from 'reselect';
import {currentXPSelector, targetXPSelector} from './experiencePoints';
import {pidgiesSelector} from './pokemon';

export default createStructuredSelector({
  currentXP: currentXPSelector,
  targetXP: targetXPSelector,
  pidgies: pidgiesSelector
});
