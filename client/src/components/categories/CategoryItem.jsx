import React from "react";
import { Row } from "react-bootstrap";

const CategoryItem = ({ children }) => {
  return (
    <Row md={12} className="cat-card align-items-center">
      {children}
    </Row>
  );
};

export default CategoryItem;
