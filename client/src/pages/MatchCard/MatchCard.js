import React, { Component } from "react";
import MatchApp from "../../components/MatchApp";
import TitleMatch from "../../components/TitleMatch";
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
    );
  }
}
export default MatchCard;







//<Title>
//{this.state.dates.map(match => (
//  <DateApp
//    setMatch={this.setMatch} 
//    releaseMatch={this.releaseMatch}           
//    key={match._id}
//    id={match._id}
//    image={match.image}    
//    name={match.firstName}
//    age={match.age}
//    neighborhood={match.neighborhood}
//    />
//))}
//</Title> 