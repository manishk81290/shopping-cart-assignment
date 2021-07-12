import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = ({ copyright }) => {
  return (
    <Container fluid>
      <Row md={12} className="footer">
        <Col>
          Copyright &copy; 2011-{new Date().getFullYear()} {copyright}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
