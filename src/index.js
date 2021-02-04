import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Plant from './Plant';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/plant/:id" component={Plant} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);