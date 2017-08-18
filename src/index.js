import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico');
import './styles/styles.scss';
import './fonts/glyphicons-halflings-regular.eot';
import './fonts/glyphicons-halflings-regular.ttf';
import './fonts/glyphicons-halflings-regular.woff';
import './fonts/glyphicons-halflings-regular.woff2';
import './fonts/glyphicons-halflings-regular.svg';
import './styles/bootstrap.min.css';
import { syncHistoryWithStore } from 'react-router-redux';
import SignIn from './components/SignIn';
import { initializeApp, database, auth } from 'firebase';
import reducer from './redux';

const store = configureStore(reducer);

// TODO: Update Firebase Web Config
initializeApp({
  apiKey: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
  authDomain: 'your-app.firebaseapp.com',
  databaseURL: 'https://your-app.firebaseio.com',
  projectId: 'your-app'
});

database().ref('deputyRoutes').on('value', snap => {
  const dates = snap.val();
  store.dispatch({ type: 'LOAD_DATES_SUCCESS', dates });
});


auth().onAuthStateChanged(user => {
  if (user) {
    const history = syncHistoryWithStore(browserHistory, store);
    render(
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>, document.getElementById('app')
    );
  } else {
    render (<SignIn />, document.getElementById('app'));
  }
});
