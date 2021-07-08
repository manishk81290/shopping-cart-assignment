import React, { useState } from "react";
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

import ShoppingState from "./context/ShoppingState";

import "./App.scss";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ShoppingState>
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
                  <Slider />
                  <Category />
                </Container>
              )}
            />
            <Route
              exact
              path="/products/:productCategory"
              render={(props) => (
                <Container className="mt-150-mb-20">
                  <Row>
                    <ProductCategory />
                    <Product {...props} />
                  </Row>
                </Container>
              )}
            />
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
          <Footer copyright="Sabka Bazar Grocery Supplies Pvt Ltd" />
        </div>
      </Router>
    </ShoppingState>
  );
}

export default App;
