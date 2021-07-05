import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const ProductItem = ({
  name,
  imageURL,
  description,
  price,
  stock,
  category,
  sku,
  id,
  imageUrl,
}) => {
  return (
    <Col md={3}>
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={`.${imageURL}`} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" className="theme-button">
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
