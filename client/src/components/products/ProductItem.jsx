import React from "react";
import { Col, Card, Button } from "react-bootstrap";

import ShoppingContext from "../../context/ShoppingContext";

const ProductItem = ({ item }) => {
  const {
    name,
    imageURL,
    description,
    price,
    stock,
    category,
    sku,
    id,
    imageUrl,
  } = item;
  const shoppingContext = React.useContext(ShoppingContext);
  const { cart, updateCart } = shoppingContext;

  const buyNow = () => {
    let index = -1;
    cart.filter((item, i) => {
      if (item.id === id) {
        index = i;
        return true;
      }
    });
    let newCart = [...cart];
    if (index !== -1) {
      newCart[index]["count"] += 1;
    } else {
      item["count"] = 1;
      newCart.push(item);
    }
    updateCart(newCart);
  };
  return (
    <Col lg={3} md={6} sm={12} className="pr-0">
      <Card className="brb-1-dashed">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}${imageURL}`} />
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          <div>
            <p className="card-price lg">MRP Rs.{price}</p>
            <Button
              variant="primary"
              className="theme-button lg"
              onClick={buyNow}
            >
              Buy Now
            </Button>
            <Button
              variant="primary"
              className="theme-button md"
              onClick={buyNow}
            >
              Buy Now @ Rs.{price}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
