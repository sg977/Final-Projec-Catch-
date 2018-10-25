import React from 'react';
import "./Landing.css";
import { Container, Row, Col, Input, Button } from 'mdbreact';
// import HomeHeader from "../../components/HomeHeader";
import Footer from "../../components/Footer";
import Logo from "./catchapp.PNG";

 

class Landing extends React.Component  {
    render() {
      return(
   <div>
        <div id="animate">
            <p id="title">Catch</p>
            <div id="subtitle">
            <p>I Kinda Wanna Be</p>
            <p> More Than Just Friends</p>
             </div>
            <Col sm="6"> 
            <div id="buttons">
            <Button color="primary">Login</Button>
            <Button>Sign Up</Button>
            </div>
            </Col>
        <div id="logo">
        <img src={Logo} />
        </div>
        
        </div>
        <Footer />
        </div>
  
      );
    }
  };


export default Landing; 