import React, { useContext } from "react";
import { Nav, Navbar, Container, Row, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./../../static/images/logo_2x.png";
import CartIcon from "./../../static/images/cart.svg";

import ShoppingContext from "../../context/ShoppingContext";

import "./layout.scss";

const Header = ({ handleShow }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { cart } = shoppingContext;
  return (
    <Navbar bg="light" expand="lg" className="navbar" fixed="top">
      <Container className="pos-rel">
        <Row>
          <Navbar.Brand href="/">
            <Image src={Logo} alt="React Bootstrap logo" className="logo" />
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
          <Image src={CartIcon} alt="cart" />{" "}
          {cart.length &&
            cart.reduce(
              (accumulator, item) => accumulator + item.count,
              0
            )}{" "}
          items
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
