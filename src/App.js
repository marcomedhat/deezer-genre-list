import React from 'react';
import './App.css';

import Genres from './components/Genres';
import Artists from './components/Artists';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App px-5 pb-5 pt-0">
        <Switch>
          <Route exact path="/" component={Genres} />
          <Route path="/:id" component={Artists} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
