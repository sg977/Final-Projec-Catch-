import React, { Component } from "react";
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import MatchApp from "../../components/MatchApp";
import TitleMatch from "../../components/TitleMatch";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import "./MatchCard.css";

class MatchCard extends Component {
  // Setting this.state.dates to the dates json array
  state = {
    dates: [],
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: "",
    age: "",
    neighborhood: "",
    gender: "",
    genderInterest: "",
    matched: "",
    hooked: "",
    roomID: "",
    matchEmail: ""
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getMatches()
      .then(res =>
        this.setState({ dates: res.data, firstName: "", lastName: "", email: "", password: "", image: "", age: "", neighborhood: "", gender: "", genderInterest: "", matched: "", hooked: ""}))
      .catch(err => console.log(err));
        
  };

  setMatch = (id, match) => {
    console.log("match set");
    console.log(id, match)
    API.newMatch(id, match)
      .then(res => 
        this.setState({
          roomID: res.data._id,
          matchEmail: this.state.dates[0].email
        }))
        console.log(this.state.roomID)
        API.changeStatus(this.state.roomID, {userOne: this.state.matchEmail})
        console.log("updated")
    // this.updateMatch();
  };

  updateMatch = () => {
    API.changeStatus(this.state.roomID, {userOne: this.state.matchEmail})
    console.log("updated")
  };

  releaseMatch = id => {
    API.deleteMatch(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };
  // Map over this.state.dates and render a FriendCard component for each date object
  render() {
    return (  
      <div>
      <div>
      <Header /> 
        
      <TitleMatch>
        {console.log(this.state)}
      {this.state.dates.map(match => (
        <MatchApp 
          releaseMatch={this.releaseMatch}       setMatch={this.setMatch}    
          key={match._id}
          id={match._id}
          image={match.image}    
          name={match.firstName}
          surname={match.lastName}
          age={match.age}
          neighborhood={match.neighborhood}
          email={match.email}
          />
      ))}
      </TitleMatch> 
      <div class="push"></div>
      <div class="footer">
       
      </div>

      </div> 
      <Footer /> 
      </div>
    );
  }
}
export default MatchCard;







