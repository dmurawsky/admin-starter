import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const initialState = {
  users: {},
  user: {},
};

const users = (state = initialState.users, action) => {
  switch (action.type) {

    case 'LOAD_USERS':
      return action.users;

    default:
      return state;

  }
};

const user = (state = initialState.user, action) => {
  switch (action.type) {

    case 'SET_USER':
      return action.user;

    default:
      return state;

  }
};

const rootReducer = combineReducers({
  users,
  user,
  routing: routerReducer
});

export default rootReducer;
