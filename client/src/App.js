import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Slider from "./components/layout/Slider";
import Category from "./components/categories/Category";
import Product from "./components/products/Product";
import ProductCategory from "./components/products/ProductCategory";
import SignIn from "./components/pages/SignIn";
import Register from "./components/pages/Register";
import Cart from "./components/cart/Cart";

import CategoryService from "./services/CategoryService";
import ProductService from "./services/ProductService";
import BannerService from "./services/BannerService";
import CartService from "./services/CartService";

import "./App.scss";

function App() {
  const [show, setShow] = useState(false);
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // CategoryService.getCategories();
    // CategoryService.getCategoryById("5b6899953d1a866534f516e2");
    // ProductService.getProducts();
    // ProductService.getProductById("5b6c6c1801a7c38429530887");
    // ProductService.getProductByCategoryId("5b6899953d1a866534f516e2");
    // CartService.addToCart();
  });

  useEffect(() => {
    if (!banners.length)
      BannerService.getBanners().then(({ ...res }) => {
        const data = res.data.sort((a, b) => a.order - b.order);
        setBanners(data);
      });
  }, [banners]);

  useEffect(() => {
    if (!categories.length)
      CategoryService.getCategories().then(({ ...res }) => {
        const data = res.data.sort((a, b) => a.order - b.order);
        setCategories(data);
      });
  }, [categories]);

  useEffect(() => {
    if (!products.length)
      ProductService.getProducts().then(({ ...res }) => {
        const data = res.data.sort((a, b) => a.order - b.order);
        setProducts(data);
      });
  }, [products]);

  return (
    <Router>
      <Cart show={show} handleClose={handleClose} />
      <div className="App">
        <Header handleShow={handleShow} />
        <Switch>
          <Route
            exact
            path={["/", "/home"]}
            render={(props) => (
              <Container fluid>
                <Slider banners={banners} />
                <Category categories={categories} />
              </Container>
            )}
          />
          <Route
            exact
            path="/products/:productCategory"
            render={(props) => (
              <Container className="mt-150-mb-20">
                <Row>
                  <ProductCategory categories={categories} />
                  <Product {...props} products={products} />
                </Row>
              </Container>
            )}
          />
          <Route
            exact
            path="/signin"
            render={(props) => (
              <Container className="mt-150-mb-20">
                <Row className="auth">
                  <SignIn />
                </Row>
              </Container>
            )}
          />
          <Route
            exact
            path="/register"
            render={(props) => (
              <Container className="mt-150-mb-20">
                <Row className="auth">
                  <Register />
                </Row>
              </Container>
            )}
          />
        </Switch>
        <Footer copyright="Sabka Bazar Grocery Supplies Pvt Ltd" />
      </div>
    </Router>
  );
}

export default App;
