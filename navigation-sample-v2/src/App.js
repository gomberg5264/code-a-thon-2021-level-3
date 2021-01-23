import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

import About from './about';
import Home from './home';
import Users from './users';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        
        <strong>This is page content that doesn't change when I switch pages</strong>
        <hr />

        <Switch>
          <Route path="/about"> 
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <br /><hr />
        <strong>And this is also page content that doesn't change when I switch pages</strong>
      </div>
    </Router>
  );
}
