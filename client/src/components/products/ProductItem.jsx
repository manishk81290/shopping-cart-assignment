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
    <Col md={3} className="pr-0">
      <Card className="brb-1-dashed-imp">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={`.${imageURL}`} />
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          <div>
            <p className="card-price">MRP Rs.{price}</p>
            <Button variant="primary" className="theme-button">
              Buy Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
