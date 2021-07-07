import React from "react";
import { Col, Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CategoryItem from "./CategoryItem";

import "./category.scss";

const Category = ({ categories }) => {
  let history = useHistory();
  return (
    <>
      {categories
        .sort((a, b) => {
          return a.order - b.order;
        })
        .filter((cat) => cat.order !== -1)
        .map((category, index) => {
          return index % 2 === 0 ? (
            <CategoryItem key={category.key}>
              <Col md={6} className="cat-card-img">
                <Image
                  src={`${process.env.PUBLIC_URL}${category.imageUrl}`}
                  fluid
                />
              </Col>
              <Col md={6} className="cat-card-desc">
                <h5>{category.name}</h5>
                <p>{category.description}</p>
                <Button
                  variant="primary"
                  className="theme-button"
                  onClick={() => {
                    history.push(`/products/${category.id}`);
                  }}
                >
                  Explore {category.key}
                </Button>
              </Col>
            </CategoryItem>
          ) : (
            <CategoryItem key={category.key}>
              <Col md={6} className="cat-card-desc">
                <h5>{category.name}</h5>
                <p>{category.description}</p>
                <Button
                  variant="primary"
                  className="theme-button"
                  onClick={() => {
                    history.push(`/products/${category.id}`);
                  }}
                >
                  Explore {category.key}
                </Button>
              </Col>
              <Col md={6} className="cat-card-img">
                <Image
                  src={`${process.env.PUBLIC_URL}${category.imageUrl}`}
                  fluid
                />
              </Col>
            </CategoryItem>
          );
        })}
    </>
  );
};

export default Category;
