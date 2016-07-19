import {combineReducers} from 'redux';
import experiencePoints from './experiencePoints';
import totals from './totals';

const reducers = {
  experiencePoints,
  totals
};

export default combineReducers(reducers);
