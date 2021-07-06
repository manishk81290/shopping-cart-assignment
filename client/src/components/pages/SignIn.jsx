import React from "react";
import { Col, Form, Button } from "react-bootstrap";

import "./pages.scss";
const SignIn = () => {
  return (
    <>
      <Col md={2}></Col>
      <Col md={4}>
        <h4>Login</h4>
        <p>Get access to your Orders, Wishlist and Recommendations.</p>
      </Col>
      <Col md={4}>
        <Form>
          <div class="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div class="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <Button
            variant="primary"
            type="button"
            className="theme-button w-100"
          >
            Login
          </Button>
        </Form>
      </Col>
    </>
  );
};

export default SignIn;
