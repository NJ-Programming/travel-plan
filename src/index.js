import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Msg from './containers/Msg'
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import PromiseMiddleware from './middleware/PromiseMiddleware';
import { snackbarMiddleware } from './middleware/snackbarMiddleware';

const store = createStore(reducers, applyMiddleware(thunk, PromiseMiddleware, snackbarMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Msg />

  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
