import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import './styles/styles.scss';
import './fonts/glyphicons-halflings-regular.eot';
import './fonts/glyphicons-halflings-regular.ttf';
import './fonts/glyphicons-halflings-regular.woff';
import './fonts/glyphicons-halflings-regular.woff2';
import './fonts/glyphicons-halflings-regular.svg';
import './styles/bootstrap.min.css';
import { syncHistoryWithStore } from 'react-router-redux';
import reducer from './redux';
import routes from './routes';
import { initializeApp, database, auth } from 'firebase';
import SignIn from './components/SignIn';


// TODO: Update Firebase Web Config
initializeApp({
  apiKey: "AIzaSyDMr9drweSH36_2pVMP1FJqOhJ76F8zZqE",
  authDomain: "demiurge-sales.firebaseapp.com",
  databaseURL: "https://demiurge-sales.firebaseio.com",
  projectId: "demiurge-sales",
});


// Runs when user is signed in
const appInit = user => {
  const store = createStore(reducer);
  const history = syncHistoryWithStore(browserHistory, store);

  // Render React app with routes and redux
  render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>, document.getElementById('app')
  );

  // Firebase realtime updates whenever anything changes in users/
  database().ref('users').on('value', snap => {
    const users = snap.val();
    if (users) {
      store.dispatch({ type: 'LOAD_USERS', users });
    }
  });

  // Set current user info
  store.dispatch({ type: 'SET_USER', user: { uid: user.uid, email: user.email } });
};

// Render App or SignIn on auth state change
auth().onAuthStateChanged(user => {
  if (user) {
    appInit(user);
  } else {
    render (<SignIn />, document.getElementById('app'));
  }
});
