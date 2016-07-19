import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import reducers from '../reducers';

const logger = createLogger({
  collapsed: true,
  predicate: () => true
});

const middlewares = [
  logger
];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
