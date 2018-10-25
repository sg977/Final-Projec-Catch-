import React, { Component } from "react";
import DateApp from "../../components/DateApp";
import TitleUser from "../../components/TitleUser";
import API from "../../utils/API";
import "./Profile.css";

class Profile extends Component {
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
    API.getUsers()
      .then(res =>
        this.setState({ dates: res.data, firstName: "", lastName: "", email: "", password: "", image: "", age: "", neighborhood: "", gender: "", genderInterest: "", matched: "", hooked: ""}))
      .catch(err => console.log(err));

  };



  releaseMatch = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };
  // Map over this.state.dates and render a FriendCard component for each date object
  render() {
    return (     
      <TitleUser>
      {this.state.dates.map(match => (
        <DateApp           
          key={match._id}
          id={match._id}
          image={match.image}    
          firstName={match.firstName}
          lastName={match.lastName}
          age={match.age}         
          neighborhood={match.neighborhood}
          genderInterest={match.genderInterest}
          />
      ))}
      </TitleUser>    
    );
  }
}
export default Profile;







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