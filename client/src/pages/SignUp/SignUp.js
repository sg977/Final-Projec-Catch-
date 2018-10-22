import React, {Component} from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import API from "../../utils/API";
import ImageUpload from "../../components/ImageTesting";
import Footer from "../../components/Footer";



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
      date: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleInputChange (event) {
    this.setState({
      firstName: event.target.firstName,
      lastName: event.target.lastName,
      email: event.target.email,
      password: event.target.password,
      image: event.target.image,
      age: event.target.age,
      neighborhood: event.target.neighborhood,
      gender: event.target.gender,
      genderInterest: event.target.genderInterest
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
        date: new Date(Date.now())
      })
    
  };

  render() {
    return(
      <Container>
        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
    
                    <Input label="First Name" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input label="Last Name" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input label="Gender" icon="user" group type="text" validate error="wrong" success="right" />
                    <Input label="Gender preference" icon="user" group type="text" validate error="wrong" success="right" />
                    <Input label="Age" icon="user" group type="number" validate error="wrong" success="right" />
                    <Input label="Neighborhood" icon="user" group type="text" validate error="wrong" success="right" /> 
                    <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                    <Input label="Your password" icon="lock" group type="password" validate/>

                    <ImageUpload />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="cyan" type="submit" onClick={this.handleFormSubmit}>Register</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>

        <Col lg="12">

        <Footer />

        </Col>

        </Row>

       
      </Container>
      


    );
  }
};





export default FormsPage;