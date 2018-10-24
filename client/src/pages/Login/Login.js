import  React, {Component} from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
// import Header from "../"
import Header from "../../components/Header"; 
import Footer from "../../components/Footer"; 
// 
import { Container, Row, Col, Input, Button } from 'mdbreact';

class FormsPage extends React.Component  {
  render() {
    return(
      <div>
              <Header />
      <Container>
  
        <Row>
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="Type your password" icon="lock" group type="password" validate/>
              </div>
              <div className="text-center">
                <Button>Login</Button>
                <Button>Sign Up</Button>
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
