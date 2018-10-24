import React, { Component } from 'react';

class Select1 extends Component {
  render () {
    return(
      <div>
        <select className="browser-default custom-select">
          <option>Gender Preference</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Neutral</option>
        </select>
      </div>
    );
  }
}

export default Select1;