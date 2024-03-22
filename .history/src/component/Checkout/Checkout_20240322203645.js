import React, { useState } from "react";
import "./Checkout.css";
import Header from "../Header/HeaderMain/Header";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";
import { useCart } from "../../UseContext";
import Button from "../Button/Button";
import axios from "axios";

const Checkout = () => {
  const { cartItems } = useCart();
  const [Checkoutcart, setCheckoutcart] = useState(cartItems);
  const isProduct = Checkoutcart.length > 0;
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    phone: "",
    street_address: "",
    email_address: "",
    name_product: "",
    count: "",
    price: "",
    total: "",
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddStudent = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      "https://65e1c4b0a8583365b31737f7.mockapi.io/user",
      input
    );
    if (result.status === 201) {
      alert("Add success");
      setInput({
        name: "",
        phone: "",
        street_address: "",
        email_address: "",
        name_product: "",
        count: "",
        price: "",
        total: "",
      });
      navigate("/");
    }
  };

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

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
        <div className={`noti ${isProduct ? "active" : ""}`}>
          <h1>Oops!Your cart is currently empty.</h1>
          <Link to="/list-product">
            <Button title="Return to shop"></Button>
          </Link>
        </div>
        <div className={`box_checkout ${isProduct ? "active" : ""}`}>
          <Row>
            <Col lg="7">
              <div className="billing-fields">
                <h2>Billing details</h2>
                <div className="fullname">
                  <label>Full name</label>
                  <input
                    type="text"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={isFocused ? "focused" : ""}
                  />
                </div>
                <div className="phonenumber">
                  <label>Phone</label>
                  <input
                    type="number"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={isFocused ? "focused" : ""}
                  />
                </div>
                <div className="address">
                  <label>Street address</label>
                  <input
                    type="text"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={isFocused ? "focused" : ""}
                  />
                </div>
                <div className="email-address">
                  <label>Email address</label>
                  <input
                    type="text"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={isFocused ? "focused" : ""}
                  />
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
                    <div
                      className="list-product border-bottom d-flex justify-content-between align-items-center"
                      key={item.id}
                    >
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
