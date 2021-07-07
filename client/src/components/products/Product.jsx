import React, { useState, useEffect } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import ProductItem from "./ProductItem";

import "./product.scss";

const Product = ({ match, products }) => {
  const [product, setProduct] = useState([]);
  const productList = products;
  useEffect(() => {
    if (match.params.productCategory === "all") {
      setProduct((prevProduct) => productList);
    } else {
      setProduct((prevProduct) =>
        productList.filter(
          (prod) => prod.category === match.params.productCategory
        )
      );
    }
    console.log(product);
  }, [match.params.productCategory, products]);
  return (
    <Col lg={9} md={9} sm={12}>
      <Row lg={9} md={12} sm={12}>
        {product.length ? (
          product.map((prod) => {
            return <ProductItem {...prod} />;
          })
        ) : (
          <Alert variant="info">No Product Found!!!!</Alert>
        )}
      </Row>
    </Col>
  );
};

export default Product;
