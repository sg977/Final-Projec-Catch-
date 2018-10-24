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
      <Container>
        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
    
                    <Input label="First Name" name="firstName" icon="user" group type="text" validate error="wrong" success="right" value={this.state.firstName} onChange={this.handleInputChange}/>
                    <Input label="Last Name" name="lastName" icon="user" group type="text" validate error="wrong" success="right" value={this.state.lastName} onChange={this.handleInputChange}/>
                    <Input label="Gender" name="gender" icon="user" group type="text" validate error="wrong" success="right" onChange={this.handleInputChange}/>
                    <Input label="Gender preference" name="genderInterest" icon="user" group type="text" validate error="wrong" success="right" onChange={this.handleInputChange} />
                    <Input label="Age" name="age" icon="user" group type="number" validate error="wrong" success="right" onChange={this.handleInputChange} />
                    <Input label="Neighborhood" name="neighborhood" icon="user" group type="text" validate error="wrong" success="right" onChange={this.handleInputChange} /> 
                    <Input label="Your email" name="email" icon="envelope" group type="email" validate error="wrong" success="right" onChange={this.handleInputChange} />
                    <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right" onChange={this.handleInputChange} />
                    <Input label="Your password" name="password" icon="lock" group type="password" validate onChange={this.handleInputChange} />

                    <ImageUpload />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="cyan" type="submit" raised to="/dates" onClick={this.handleFormSubmit}>Register</Button>
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