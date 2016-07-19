import React from 'react';
import {Provider} from 'react-redux';
import Calculator from './calculator';
import store from '../store';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Calculator />
      </Provider>
    );
  }
}
