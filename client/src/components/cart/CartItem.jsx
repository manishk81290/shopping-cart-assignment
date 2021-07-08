import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

export const CartItem = ({ item, index, updateQuantity }) => {
  return (
    <Row xs={12} className="cart-item">
      <Col xs={3}>
        <Image src={`${process.env.PUBLIC_URL}${item.imageURL}`} thumbnail />
      </Col>
      <Col xs={9} className="pl-0">
        <h5>{item.name}</h5>
        <Button
          variant="primary"
          className="theme-button"
          onClick={() => {
            updateQuantity("decrement", index);
          }}
        >
          -
        </Button>
        <span>{item.count}</span>
        <Button
          variant="primary"
          className="theme-button"
          onClick={() => {
            updateQuantity("increment", index);
          }}
        >
          +
        </Button>
        <span>x</span>
        <span>Rs.{item.price}</span>
        <span className="total">Rs.{item.price * item.count}</span>
      </Col>
    </Row>
  );
};

export default CartItem;
