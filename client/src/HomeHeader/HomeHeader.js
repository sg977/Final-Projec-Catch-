import React, {Component} from "react";
import { Navbar, Col, Container, Row } from "mdbreact";

class HomeHeader extends React.Component {
render() {
return (
    <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">Catch</h5>
      </Col>
    </Row>
  </Container>
);
}
}

export default HomeHeader; 