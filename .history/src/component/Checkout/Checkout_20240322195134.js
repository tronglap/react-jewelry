import React, { useState } from "react";
import "./Checkout.css";
import Header from "../Header/HeaderMain/Header";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { useCart } from "../../UseContext";
import Button from "../Button/Button";

const Checkout = () => {
  const { cartItems } = useCart();
  const [Checkoutcart, setCheckoutcart] = useState(cartItems);

  return (
    <div className="CheckOut">
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
        <div className="box_checkout">
          <Row>
            <Col lg="7">
              <div className="bill">
                <h2>Billing details</h2>
                <div className="fullname">
                  <input type="text" />
                </div>
                <div className="phonenumber">
                  <input type="number" />
                </div>
                <div className="address">
                  <input type="text" />
                </div>
              </div>
            </Col>
            <Col lg="5">
              <div className="bill">
                <div className="cart-total border-bottom">
                  <h2>Your order</h2>
                </div>
                <div className="total-product border-bottom">
                  <p>Product</p>
                  <p>Subtotal</p>
                </div>
                {Checkoutcart &&
                  Checkoutcart.map((item) => (
                    <div className="list-product border-bottom d-flex justify-content-between align-items-center">
                      <div className="info d-flex justify-content-between gap-3">
                        <div className="name">{item.name}</div>
                        <div className="count">x {item.quantity}</div>
                      </div>
                      <div className="price">
                        <span>$</span>
                        {(
                          (item.isPromotion ? item.isPromotion : item.cost) *
                          item.quantity
                        ).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                    </div>
                  ))}
                <div className="total border-bottom">
                  <p>Total</p>
                  <div className="price d-flex align-items-center">
                    <span>$</span>
                    <p>
                      {Checkoutcart.reduce(
                        (total, item) =>
                          total +
                          (item.isPromotion
                            ? parseFloat(item.isPromotion)
                            : parseFloat(item.cost)) *
                            item.quantity,
                        0
                      ).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </div>
                <div className="proceed-to-checkout">
                  <Link className="btn-proceed" to="/">
                    <Button title="Place Order"></Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
