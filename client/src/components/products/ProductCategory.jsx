import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Card,
  ListGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

const ProductCategory = ({ categories }) => {
  const categoryList = categories
    .map((cat) => {
      return { name: cat.name, key: cat.key, id: cat.id, order: cat.order };
    })
    .filter((cat) => cat.order !== -1);
  console.log(categoryList);
  return (
    <Col md={3} className="bg-col-e8e8e8">
      <Card style={{ width: "100%" }} className="xs-hide">
        {/* <Card.Header>Featured</Card.Header> */}
        <ListGroup variant="flush">
          {categoryList.map((catList) => {
            return (
              <>
                <ListGroup.Item key={catList.key}>
                  <Link to={`/products/${catList.id}`}>{catList.name}</Link>
                </ListGroup.Item>
              </>
            );
          })}
        </ListGroup>
      </Card>
      <DropdownButton
        id="dropdown-basic-button"
        title="Category Name"
        className="xs-only"
      >
        {categoryList.map((catList) => {
          return (
            <>
              <Dropdown.Item>
                <Link to={`/products/${catList.id}`}>{catList.name}</Link>
              </Dropdown.Item>
            </>
          );
        })}
      </DropdownButton>
    </Col>
  );
};

export default ProductCategory;
