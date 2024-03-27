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

  // Hàm chuẩn hóa số điện thoại
  const normalizePhoneNumber = (phoneNumber) => {
    // Loại bỏ các ký tự không phải số
    const cleaned = phoneNumber.replace(/\D/g, "");

    // Kiểm tra độ dài của số điện thoại
    const length = cleaned.length;

    // Độ dài hợp lệ của số điện thoại ở Việt Nam là 10 hoặc 11 chữ số
    if (length === 10) {
      // Nếu có 10 chữ số, thêm đầu số "0"
      return "0" + cleaned;
    } else if (length === 11 && cleaned.startsWith("84")) {
      // Nếu có 11 chữ số và bắt đầu bằng "84", thay thế "84" bằng "0"
      return "0" + cleaned.slice(2);
    }

    // Trả về số điện thoại không thay đổi nếu không hợp lệ
    return phoneNumber;
  };

  // Sử dụng hàm normalizePhoneNumber trong handleInputChange
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]:
        e.target.name === "phone"
          ? normalizePhoneNumber(e.target.value)
          : e.target.value,
    });
  };

  const [formValid, setFormValid] = useState(true);
  const handleAddOrder = async (e) => {
    e.preventDefault();
    if (
      input.name &&
      input.phone &&
      input.street_address &&
      input.email_address
    ) {
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
    } else {
      setFormValid(false);
    }
  };

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  console.log(input);

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
        >
          <Row>
            <Col lg="7">
              <div className="billing-fields">
                <h2>Billing details</h2>
                <Form
                  onSubmit={handleAddOrder}
                  className={`box_checkout ${isProduct ? "active" : ""}`}
                  noValidate
                >
                  <div
                    className={`fullname ${
                      !input.name && !formValid ? "error" : ""
                    }`}
                  >
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
                    {!input.name && !formValid && (
                      <p className="error-message">
                        Please enter your full name
                      </p>
                    )}
                  </div>
                  <div
                    className={`phonenumber ${
                      !input.phone && !formValid ? "error" : ""
                    }`}
                  >
                    <label>Phone</label>
                    <input
                      type="number"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={isFocused ? "focused" : ""}
                      onChange={handleInputChange}
                      value={input.phone}
                      name="phone"
                      required
                    />
                    {!input.phone && !formValid && (
                      <p className="error-message">
                        Please enter your phone number
                      </p>
                    )}
                  </div>
                  <div
                    className={`address ${
                      !input.street_address && !formValid ? "error" : ""
                    }`}
                  >
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
                    {!input.street_address && !formValid && (
                      <p className="error-message">
                        Please enter your street address
                      </p>
                    )}
                  </div>
                  <div
                    className={`email-address ${
                      !input.email_address && !formValid ? "error" : ""
                    }`}
                  >
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
                    {!input.email_address && !formValid && (
                      <p className="error-message">
                        Please enter your email address
                      </p>
                    )}
                  </div>{" "}
                </Form>
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
                  <div className="price d-flex align-items-center">
                    <span>$</span>
                    <p>
                      {Checkoutcart.reduce(
                        (total, item) =>
                          total +
                          (item.promotion
                            ? parseFloat(item.promotion)
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
                  <div className="btn-proceed">
                    <Button type="submit" title="Place Order"></Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Checkout;
