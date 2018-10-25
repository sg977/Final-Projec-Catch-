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
            <h1>Catch Yourself A Winner</h1>
            <Button color="primary">Login</Button>
            <Button>Sign Up</Button>
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