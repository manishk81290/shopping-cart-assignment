import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Slider from "./components/layout/Slider";
import Category from "./components/categories/Category";
import Product from "./components/products/Product";
import ProductCategory from "./components/products/ProductCategory";
import SignIn from "./components/pages/SignIn";
import Register from "./components/pages/Register";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
