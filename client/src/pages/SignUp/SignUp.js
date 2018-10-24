import React, {Component} from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import API from "../../utils/API";
import ImageUpload from "../../components/ImageTesting";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Select from "../../components/Select";
import Select1 from "../../components/Select1";
import "./SignUp.css";




class FormsPage extends React.Component  {

  constructor(props) {
    super(props);
    this.state = 
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      image: "",
      age: "",
      neighborhood: "",
      gender: "",
      genderInterest: "",
      date: "",
      matched: false,
      hooked: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit (event) {
    event.preventDefault();
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        image: this.state.image,
        age: this.state.age,
        neighborhood: this.state.neighborhood,
        gender: this.state.gender,
        genderInterest: this.state.genderInterest,
        date: new Date(Date.now()),
        matched: this.state.matched,
        hooked: this.state.hooked
      })
    
  };

  render() {
    return(
      <div>
        <Header />

      <Container>


    
        <Row>
          <Col lg="12">

                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    
                  
                    <Input label="First Name" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input label="Last Name" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input label="Age" icon="address-book-o" group type="number" validate error="wrong" success="right" />
                    <Input label="Neighborhood" icon="address-card" group type="text" validate error="wrong" success="right" /> 
                    
                    <Select />
                    <Select1 />
                    <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                    <Input label="Your password" icon="lock" group type="password" validate/>
                    <Input label="Confirm your password" icon="key" group type="password" validate error="wrong" success="right"/>

                    <ImageUpload />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="cyan" type="submit" raised to="/dates" onClick={this.handleFormSubmit}>Register</Button>
                  </div>
                </form>
          
          </Col>
        </Row>



       
      </Container>

<Footer />
</div>
      


    );
  }
};





export default FormsPage;