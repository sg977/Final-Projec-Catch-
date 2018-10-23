import React, {Component} from 'react';

class Select extends React.Component {
    constructor(props) {
      super(props);

      this.state = {value: 'Female'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (

        <div class="md-form form-group">
            <i className={`fa fa-${ this.props.icon } prefix`}></i>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Neutral">Neutral</option>
            </select>
        </div>
      );
    }
}

export default Select; 