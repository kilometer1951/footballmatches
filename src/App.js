import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Layout from "./Hoc/Layout";
import Home from "./component/home";
import Error from "./component/404";
import SignIn from "./component/auth/Signin";
import Dashboard from "./component/auth/Dashboard";
import Matches from "./component/auth/Matches";
import addEditMatch from "./component/auth/addEditMatch";
import AdminPlayers from "./component/auth/Players";
import addEditPlayers from "./component/auth/addEditPlayers";

class App extends Component {
  renderRoutes() {
    const { user } = this.props;

    switch (user) {
      case null:
        return (
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={SignIn} path="/signin" />
            <Route exact component={Error} />
          </Switch>
        );

      default:
        return (
          <Switch>
            <Route exact component={Dashboard} path="/dashboard" />
            <Route exact component={Matches} path="/admin_matches" />
            <Route exact component={AdminPlayers} path="/admin_players" />
            <Route
              exact
              component={addEditPlayers}
              path="/admin_players/add_players"
            />
            <Route
              exact
              component={addEditPlayers}
              path="/admin_players/add_players/:id"
            />
            <Route
              exact
              component={addEditMatch}
              path="/admin_matches/edit_match"
            />
            <Route
              exact
              component={addEditMatch}
              path="/admin_matches/edit_match/:id"
            />
            <Route exact component={Home} path="/" />
            <Route exact component={Error} />
          </Switch>
        );
    }
  }

  render() {
    return <BrowserRouter>{this.renderRoutes()}</BrowserRouter>;
  }
}

export default App;
