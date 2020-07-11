import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CountriesList from './components/countries.component';
import SlotMashine from './components/slot-mashine.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
              YoBetIt
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/countries"} className="nav-link">
                  Countries
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/slotMashine"} className="nav-link">
                  Slot mashine
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/countries"]} component={CountriesList} />
              <Route path="/slotMashine" component={SlotMashine} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;