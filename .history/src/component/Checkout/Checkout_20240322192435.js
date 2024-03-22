import React, { useState } from "react";
import "./Checkout.css";
import Header from "../Header/HeaderMain/Header";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { useCart } from "../../UseContext";

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
    </div>
  );
};

export default Checkout;
