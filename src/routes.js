import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import EmployeesPage from './components/EmployeesPage';
import EmployeePage from './components/EmployeePage';
import MaterialsPage from './components/MaterialsPage';
import MapPage from './components/MapPage';
import NotFoundPage from './components/NotFoundPage.js';

// TODO: Create the routes you need
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/employees" component={EmployeesPage}/>
    <Route path="/employees/:userId" component={EmployeePage}/>
    <Route path="/employees/:userId/materials" component={MaterialsPage}/>
    <Route path="/map" component={MapPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
