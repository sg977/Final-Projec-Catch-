import React, { Component } from "react";
import DateApp from "../../components/DateScroll";
import Title from "../../components/Title";
import dates from "./dates.json";
import "./DateCard.css";



class DateCard extends Component {
  // Setting this.state.dates to the dates json array

  state = {
    dates
  };



  releaseMatch = id => {
    // Filter this.state.dates for dates with an id not equal to the id being removed
    const dates = this.state.dates.filter(date => date.id !== id);
    // Set this.state.dates equal to the new dates array
    this.setState({ dates });
  };


  // Map over this.state.dates and render a FriendCard component for each date object
  render() {
    return (
      <Title>
          <DateApp
            releaseMatch={this.releaseMatch}           
            key={dates[0].id}
            id={dates[0].id}
            image={dates[0].image}    
            name={dates[0].name}
            age={dates[0].age}
            neighborhood={dates[0].neighborhood}
            />
      </Title>       
    );
  }
}

export default DateCard;
