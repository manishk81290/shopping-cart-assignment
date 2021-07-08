import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Register = () => {
  return (
    <Container className="mt-150-mb-20">
      <Row className="auth">
        <Col md={2}></Col>
        <Col md={4}>
          <h4>Signup</h4>
          <p>We do not share your personal details with anyone.</p>
        </Col>
        <Col md={4}>
          <Form>
            <div class="input-group">
              <input type="text" required />
              <label>Firstname</label>
            </div>
            <div class="input-group">
              <input type="text" required />
              <label>Lastname</label>
            </div>
            <div class="input-group">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div class="input-group">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div class="input-group">
              <input type="password" required />
              <label>Confirm Password</label>
            </div>
            <Button
              variant="primary"
              type="button"
              className="theme-button w-100"
            >
              Signup
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
