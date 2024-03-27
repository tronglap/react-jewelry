import React, { useState } from "react";
import "./Checkout.css";
import Header from "../Header/HeaderMain/Header";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";
import { useCart } from "../../UseContext";
import Button from "../Button/Button";
import axios from "axios";

const Checkout = () => {
  const { cartItems, setCartItems } = useCart();
  const [Checkoutcart] = useState(cartItems);
  const isProduct = Checkoutcart.length > 0;
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    phone: "",
    street_address: "",
    email_address: "",
  });

  const [isValidPhone, setIsValidPhone] = useState(true); // Biến để kiểm tra số điện thoại hợp lệ

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "phone") {
      const phoneNumber = e.target.value.trim();
      setIsValidPhone(phoneNumber.length >= 10 && phoneNumber.length <= 11); // Cập nhật trạng thái hợp lệ của số điện thoại
    }
  };

  const handleAddOrder = async (e) => {
    e.preventDefault();
    if (!isValidPhone) return; // Nếu số điện thoại không hợp lệ, không thực hiện thêm đơn hàng

    const result = await axios.post(
      "https://65fd87669fc4425c653229e1.mockapi.io/Order",
      { ...input, Checkoutcart: [...cartItems] }
    );
    if (result.status === 201) {
      setInput({
        name: "",
        phone: "",
        street_address: "",
        email_address: "",
      });
      setCartItems([]);
      localStorage.setItem("LIST_CART", JSON.stringify(cartItems));
      navigate("/order-success");
    }
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
            CheckOut
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
        <Form
          onSubmit={handleAddOrder}
          className={`box_checkout ${isProduct ? "active" : ""}`}
          noValidate
        >
          <Row>
            <Col lg="7">
              <div className="billing-fields">
                <h2>Billing details</h2>
                <div className={`fullname ${!input.name && !formValid ? "error" : ""}`}>
                  <label>Full name</label>
                  <input
                    type="text"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={isFocused ? "focused" : ""}
                    onChange={handleInputChange}
                    value={input.name}
                    name="name"
                    required
                  />
                  {!input.name && !formValid && <p className="error-message">Please enter your full name</p>}
                </div>
                <div className={`phonenumber ${!input.phone && !isValidPhone ? "error" : ""}`}>
                  <label>Phone</label>
                  <input
                    type="text"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={isFocused ? "focused" : ""}
                    onChange={handleInputChange}
                    value={input.phone}
                    name="phone"
                    required
                  />
                  {!input.phone && !isValidPhone && <p className="error-message">Please enter a valid phone number</p>}
                </div>
                <div className="address">
                  <label>Street address</label>
                  <input
                    type="text"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={isFocused ? "focused" : ""}
                    onChange={handleInputChange}
                    value={input.street_address}
                    name="street_address"
                    required
                  />
                </div>
                <div className="email-address">
                  <label>Email address</label>
                  <input
                    type="text"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={isFocused ? "focused" : ""}
                    onChange={handleInputChange}
                    value={input.email_address}
                    name="email_address"
                    required
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
                          (item.promotion ? item.promotion : item.cost) *
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
