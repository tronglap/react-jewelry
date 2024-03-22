import React from "react";
import "./Cart.css";
import Header from "../Header/HeaderMain/Header";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Cart = () => {
  return (
    <div className="Cart">
      <Header />
      <Container>
        <div className="link_header">
          <Link to="/" className="Home">
            <i className="fa-solid fa-house"></i>
            Home Page
          </Link>
          <div className="icon">
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <Link to="/Cart" className="Shop">
            Cart
          </Link>
        </div>
      </Container>
      <Container>
        <div className="cart-product">
          <Row>
            <Col lg={8}>
              <Col>
                <Row>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </Col>
              <Col>2</Col>
            </Col>
            <Col lg={4}>ABC</Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
