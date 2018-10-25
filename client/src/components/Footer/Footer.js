import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import "./Footer.css";

class FooterPage extends React.Component {
render() {
return (
<Footer color="indigo" className="page-footer font-small">

  <Container fluid className="text-center text-md-left">
    {/* <Row>
      <Col md="6">
      <h5 className="title">Catch</h5>
      </Col>
    </Row> */}
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      {/* TODO: Subtitute Link to heroku */}
      <a href=""> Catch.com </a>
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;