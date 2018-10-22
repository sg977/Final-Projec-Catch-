import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notifications, {notify} from "react-notify-toast";
import DateCard from "./pages/DateCard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
<<<<<<< HEAD
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


=======
import InstantMessage from "./pages/InstantMessage";
>>>>>>> ee61f33213d6eae05c1d75ea060ddf124f635b16

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
