import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ApiPage from '../Api/ApiPage.jsx';
import Headers from '../display/Headers.jsx';

export default function App() {
  return (
    <>
      <Router>
        <Headers />
        <Switch>
          <Route exact path="/">
            <ApiPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
