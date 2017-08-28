import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Routes from './router';
import normalize from 'normalize.css';
import styles from '../styles/globals.css';

import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

const App = () => {
  const store = createStore(reducers, {}, composeWithDevTools(
		applyMiddleware(ReduxThunk),
	));
  const history = syncHistoryWithStore(createBrowserHistory(), store);

  return (
    <Provider store={store}>
      <Routes history={history}/>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
