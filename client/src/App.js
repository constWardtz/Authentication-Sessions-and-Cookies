import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginScreen, RegisterScreen, Dashboard, HomeScreen } from "./screens";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
