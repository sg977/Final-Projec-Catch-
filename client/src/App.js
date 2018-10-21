import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DateCard from "./pages/DateCard";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={DateCard} />
        <Route exact path="/dates" component={DateCard} />
      </Switch>
    </div>
  </Router>
);

export default App;
