import React, { useContext } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import CartItem from "./CartItem";

import ShoppingContext from "../../context/ShoppingContext";

import "./cart.scss";

const Cart = ({ show, handleClose }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { cart, updateCart } = shoppingContext;

  const updateQuantity = (action, index) => {
    let newCart = [...cart];
    if (action === "increment") {
      newCart[index]["count"] += 1;
    } else {
      newCart[index]["count"] -= 1;
      if (newCart[index]["count"] === 0) {
        newCart.splice(index, 1);
      }
    }
    updateCart(newCart);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          My Cart{" "}
          <span>
            ({cart.reduce((accumulator, item) => accumulator + item.count, 0)}{" "}
            item)
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={!cart.length && "no-item"}>
        <Container fluid>
          {cart.length ? (
            cart.map((item, index) => {
              return (
                <CartItem
                  item={item}
                  index={index}
                  key={item.id}
                  updateQuantity={updateQuantity}
                />
              );
            })
          ) : (
            <Row md={12}>
              <Col md={12}>
                No Item in the cart
                <span>Your favourite items are just a click away</span>
              </Col>
            </Row>
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <p>Promocode can be applied on payment page</p>
        <Button
          variant="primary"
          className="theme-button w-100"
          onClick={handleClose}
        >
          <span className="btn-text">Proceed to checkout</span>
          <span className="total">
            Rs.
            {cart.reduce(
              (accumulator, item) => accumulator + item.count * item.price,
              0
            )}{" "}
            &gt;
          </span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
