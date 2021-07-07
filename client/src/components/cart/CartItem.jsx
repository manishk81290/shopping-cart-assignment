import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

export const CartItem = ({ item }) => {
  console.log(item);
  return (
    <Row md={12} className="cart-item">
      <Col md={3}>
        <Image src={`${process.env.PUBLIC_URL}${item.imageURL}`} thumbnail />
      </Col>
      <Col md={9} className="pl-0">
        <h5>{item.name}</h5>
        <Button variant="primary" className="theme-button">
          -
        </Button>
        <span>1</span>
        <Button variant="primary" className="theme-button">
          +
        </Button>
        <span>x</span>
        <span>Rs.{item.price}</span>
        <span className="total">Total</span>
      </Col>
    </Row>
  );
};

export default CartItem;
