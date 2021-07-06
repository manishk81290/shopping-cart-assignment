import React from "react";
import { Nav, Navbar, Container, Row, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./../../static/images/logo_2x.png";
import CartIcon from "./../../static/images/cart.svg";

import "./layout.scss";

const Header = ({ handleShow }) => {
  return (
    <Navbar bg="light" expand="lg" className="navbar" fixed="top">
      <Container className="pos-rel">
        <Row>
          <Navbar.Brand href="/">
            <img src={Logo} alt="React Bootstrap logo" className="logo" />
          </Navbar.Brand>
          <Nav className="mr-auto justify-content-center main-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products/all" className="nav-link">
              Products
            </Link>
          </Nav>

          <Nav className="mr-auto justify-content-end auth-nav">
            <Link to="/signin" className="nav-link">
              SignIn
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </Nav>
        </Row>

        <Button variant="primary" className="cart-btn" onClick={handleShow}>
          <img src={CartIcon} alt="cart" /> 0 items
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
