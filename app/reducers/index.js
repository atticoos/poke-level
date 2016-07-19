import {combineReducers} from 'redux';
import experiencePoints from './experiencePoints';
import percentages from './percentages';

const reducers = {
  experiencePoints,
  percentages
};

export default combineReducers(reducers);
