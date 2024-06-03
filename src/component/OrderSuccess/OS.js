import React, { useContext } from "react";
import Header from "../Header/HeaderMain/Header";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./OS.css";
import { useCart } from "../../UseContext";

const OS = () => {
  const { cartItems, setCartItems } = useCart();
  setCartItems([]);
  localStorage.setItem("LIST_CART", JSON.stringify(cartItems));

  return (
    <div>
      <Header />
      <Container>
        <div>
          <h1>Success</h1>
          <Link to="/list-product">
            <Button title="Continue shopping"></Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default OS;
