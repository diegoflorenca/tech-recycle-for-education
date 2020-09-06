import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Question from './pages/Question';
import SignUpDonator from './pages/SignUpDonator';
import SignUpSchool from './pages/SignUpSchool';
import Map from './pages/Map';
import School from './pages/School';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/question" component={Question} />
      <Route path="/signup-donator" component={SignUpDonator} />
      <Route path="/signup-school" component={SignUpSchool} />
      <Route path="/map" component={Map} />
      <Route path="/school" component={School} />
      <Route
        component={() => (
          <div>
            <h1>HTTP 404!</h1>
          </div>
        )}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
