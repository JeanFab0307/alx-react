import React from 'react';
import App from './App/App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Map } from 'immutable';
import { uiReducer, initialState } from './reducers/uiReducer';

const store = createStore(uiReducer, Map(initialState));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
