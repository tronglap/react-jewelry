import React, { useState } from "react";
import "./Cart.css";
import Header from "../Header/HeaderMain/Header";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useCart } from "../../UseContext";

const Cart = () => {
  const { cartItems } = useCart();
  const [listCart, setListcart] = useState(cartItems);

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
                  <Col>Image</Col>
                  <Col>Product</Col>
                  <Col>Price</Col>
                  <Col>Quantity</Col>
                  <Col>Subtotal</Col>
                </Row>
              </Col>
              <Col>
                {listCart.map((item) => (
                  <Row>
                    <Col>
                      <div className="thumb">
                        <img src={item.image} alt="" />
                      </div>
                    </Col>
                    <Col>
                      <div className="name">
                        <p>{item.name}</p>
                      </div>
                    </Col>
                    <Col></Col>
                    <Col>4</Col>
                    <Col>5</Col>
                  </Row>
                ))}
              </Col>
            </Col>
            <Col lg={4}>ABC</Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
