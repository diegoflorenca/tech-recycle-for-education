import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/sobre" component={Sobre} />
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
