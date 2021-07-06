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
            <Button variant="primary" className="theme-button lg">
              Buy Now
            </Button>
            <Button variant="primary" className="theme-button md">
              Buy Now @ Rs.{price}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
