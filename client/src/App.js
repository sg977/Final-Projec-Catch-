import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notifications, {notify} from "react-notify-toast";
import Landing from "./pages/Landing";
import DateCard from "./pages/DateCard";
import MatchCard from "./pages/MatchCard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import InstantMessage from "./pages/InstantMessage";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/dates" component={DateCard} />
        <Route exact path="/matches" component={MatchCard} />
        <Route exact path="/chat" component={InstantMessage} />
      </Switch>
    </div>
  </Router>



);

export default App;
