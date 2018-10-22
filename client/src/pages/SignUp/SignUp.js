import React, {Component} from 'react';
<<<<<<< HEAD
import { Container, Row, Col, Input, Button, Fa, Card, CardBody } from 'mdbreact';
// import './SignUp.css';
// import Spinner from './components/Spinner';
// import Image from './components/Image';
// import Buttons from './components/Button';
// import WakeUp from './components/WakeUp';
// import Notifications, { notify } from 'react-notify-toast';
// import {API_URL} from "./config";
// import ImageUploader from "../../components/ImageUploader";
import ImageUpload from "../../components/ImageTesting";
import Footer from "../../components/Footer";
=======
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import API from "../../utils/API";
// import MyUploader from '../../components/Image';
>>>>>>> ee61f33213d6eae05c1d75ea060ddf124f635b16



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
    
<<<<<<< HEAD
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
=======
                    <Input className="firstName" label="First Name" icon="user" group type="text" validate error="wrong" success="right"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    />
                    <Input className="lastName" label="Last Name" icon="user" group type="text" validate error="wrong" success="right"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}                    
                    />
                    <Input className="gender" label="Select Gender" icon="user" group type="text" validate error="wrong" success="right" 
                    value={this.state.gender}
                    onChange={this.handleInputChange}                   
                    />
                    <Input className="genderInterest" label="Gender preference" icon="user" group type="text" validate error="wrong" success="right" 
                    value={this.state.genderInterest}
                    onChange={this.handleInputChange}                    
                    />
                    <Input className="age" label="Age" icon="user" group type="number" validate error="wrong" success="right" 
                    value={this.state.age}
                    onChange={this.handleInputChange}                      
                    />
                    <Input className="neighborhood" label="Neighborhood" icon="user" group type="text" validate error="wrong" success="right" 
                    value={this.state.neighborhood}
                    onChange={this.handleInputChange}                      
                    />
                    <Input className="image" label="Image Uploader" icon="image" group type="text" validaste error="wrong" success="right" 
                    value={this.state.image}
                    onChange={this.handleInputChange}                      
                    />
                    <Input className="email" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"
                    value={this.state.email}
                    onChange={this.handleInputChange}                      
                    />
                    <Input className="emailConfirm" label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"                     
                    />
                    <Input className="password" label="Your password" icon="lock" group type="password" validate 
                    value={this.state.password}
                    onChange={this.handleInputChange}                      
                    />
                 
>>>>>>> ee61f33213d6eae05c1d75ea060ddf124f635b16
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