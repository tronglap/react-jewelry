import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Checkout.css";
import Header from "../Header/HeaderMain/Header";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";
import { useCart } from "../../UseContext";
import Button from "../Button/Button";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cartItems, setCartItems } = useCart();
  const [Checkoutcart] = useState(cartItems);
  const isProduct = Checkoutcart.length > 0;
  const navigate = useNavigate();

  var today = new Date(),
    date_order =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      "|" +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds() +
      ":";

  const [input, setInput] = useState({
    name: "",
    phone: "",
    street_address: "",
    email_address: "",
    date: date_order,
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddOrder = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9dofpxr",
        "template_xfe434c",
        e.target,
        "n-D36KQTbr7EQLDLx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (
      input.name === "" &&
      input.phone === "" &&
      input.street_address === "" &&
      input.email_address === ""
    ) {
      toast.error("Please enter your info", {
        icon: ({ theme, type }) => (
          <i
            className="fa-solid fa-circle-exclamation"
            style={{ color: "#ff0000" }}
          ></i>
        ),
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (input.phone.length < 10 || input.phone.length > 11) {
        toast.error("Please enter your phone number (10 - 11)", {
          icon: ({ theme, type }) => (
            <i
              className="fa-solid fa-circle-exclamation"
              style={{ color: "#ff0000" }}
            ></i>
          ),
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (
        input.street_address.length < 10 ||
        input.street_address.length > 100
      ) {
        toast.error("Please enter your street address", {
          icon: ({ theme, type }) => (
            <i
              className="fa-solid fa-circle-exclamation"
              style={{ color: "#ff0000" }}
            ></i>
          ),
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (!input.email_address.includes("@" && ".com")) {
        toast.error("Please enter your email address", {
          icon: ({ theme, type }) => (
            <i
              className="fa-solid fa-circle-exclamation"
              style={{ color: "#ff0000" }}
            ></i>
          ),
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
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
      }
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
                <div className="fullname">
                  <label>Full name</label>
                  <input
                    type="text"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={isFocused ? "focused" : ""}
                    onChange={handleInputChange}
                    value={input.name}
                    name="name"
                  />
                </div>
                <div className="phonenumber">
                  <label>Phone</label>
                  <input
                    type="number"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={isFocused ? "focused" : ""}
                    onChange={handleInputChange}
                    value={input.phone}
                    name="phone"
                  />
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
