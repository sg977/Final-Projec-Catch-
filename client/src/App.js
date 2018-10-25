import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notifications, {notify} from "react-notify-toast";
import Landing from "./pages/Landing";
import DateCard from "./pages/DateCard";
import MatchCard from "./pages/MatchCard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import InstantMessage from "./pages/InstantMessage";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import API from "./utils/API";



  state = {
    room: "5bd16c99b837b3d9cb5c2ff6",
    hooked: true
  };

  componentDidMount() {
    this.loadHooked();
  }

  loadHooked = () => {
    API.getRoom(this.state.room)
      .then(res => 
        this.setState({
          hooked: res.data[0].hooked
        })
      )
      .catch(err => console.log(err))
  }

  handleHook = () => {
    if(this.state.hooked) {
      this.setState({
        hooked: false
      })
      API.changeStatus(this.state.room, {hooked: false})
      console.log(this.state.room, this.state.hooked)
    } else {
      this.setState({
        hooked: true
      })
      API.changeStatus(this.state.room, {hooked: true})
      console.log(this.state.room, this.state.hooked)
    }
  } 


  render() {
    return (

      <Router>
        {this.state.hooked ? 
        (
          <div>
            <Switch>
              <Route exact path="/" component={InstantMessage} />
              <Route exact path="/login" component={InstantMessage} />
              <Route exact path="/signup" component={InstantMessage} />
              <Route exact path="/dates" component={InstantMessage} />
              <Route exact path="/matches" component={InstantMessage} />
              <Route exact path="/profile" component={InstantMessage} />
              <Route exact path="/chat" component={InstantMessage} />
            </Switch>
          </div>
        ) : (
          <div>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/dates" component={DateCard} />
              <Route exact path="/matches" component={MatchCard} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/chat" component={InstantMessage} />
            </Switch>
          </div>
        
        )
      }
      </Router>
    )
  }
}

export default App;
