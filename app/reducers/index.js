import {combineReducers} from 'redux';
import doubleXP from './doubleXP';
import experiencePoints from './experiencePoints';
import totals from './totals';

const reducers = {
  doubleXP,
  experiencePoints,
  totals
};

export default combineReducers(reducers);
