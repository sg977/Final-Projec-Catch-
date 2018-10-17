import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp"; 

import Login from "./pages/Login";
// import First from "./pages/SignUp";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Login"  component={Login} />
        <Route exact path="/Signup" component={SignUp} />
        {/* <Route exact path="/dates"  />
        <Route exact path="/message" component={InstantMessage} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
