import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import OfferOne from "./../../static/images/logo_2x.png";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar" fixed="top">
      <Navbar.Brand href="/">
        <img
          src={OfferOne}
          width="200"
          height="70"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-center">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/products/all" className="nav-link">
            Products
          </Link>
        </Nav>
      </Navbar.Collapse>

      <Nav className="mr-auto justify-content-end custom-nav">
        <Link to="/signin" className="nav-link">
          SignIn
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </Nav>
      <Nav className="mr-auto justify-content-end">
        <Nav.Link href="#home">Cart</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
