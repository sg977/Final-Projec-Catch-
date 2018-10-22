import React, {Component} from 'react';
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



class FormsPage extends React.Component  {
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
                    <Button color="cyan" type="submit">Register</Button>
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