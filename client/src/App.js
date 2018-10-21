import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DateCard from "./pages/DateCard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import InstantMessage from "./pages/InstantMessage";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/dates" component={DateCard} />
        <Route exact path="/chat" component={InstantMessage} />
      </Switch>
    </div>
  </Router>
);

export default App;
