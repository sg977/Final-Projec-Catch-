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
    hooked: ""
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


  releaseMatch = id => {
    API.deleteMatch(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };
  // Map over this.state.dates and render a FriendCard component for each date object
  render() {
    return (  
      <div>
      <Header /> 
        
      <TitleMatch>
      {this.state.dates.map(match => (
        <MatchApp 
          releaseMatch={this.releaseMatch}           
          key={match._id}
          id={match._id}
          image={match.image}    
          name={match.firstName}
          surname={match.lastName}
          age={match.age}
          neighborhood={match.neighborhood}
          />
      ))}
      </TitleMatch> 
      <div class="push"></div>
      <div class="footer">
      <Footer /> 
      </div>

      </div>  
    );
  }
}
export default MatchCard;







