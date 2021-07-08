import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import ProductItem from "./ProductItem";
import ShoppingContext from "../../context/ShoppingContext";

import "./product.scss";

const Product = ({ match }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { products, getProducts } = shoppingContext;
  const [product, setProduct] = useState(products);
  useEffect(() => {
    if (!products.length) getProducts();
  }, []);
  useEffect(() => {
    if (match.params.productCategory === "all") {
      setProduct((prevProduct) => products);
    } else {
      setProduct((prevProduct) =>
        products.filter(
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
            return <ProductItem item={prod} />;
          })
        ) : (
          <Alert variant="info">No Product Found!!!!</Alert>
        )}
      </Row>
    </Col>
  );
};

export default Product;
