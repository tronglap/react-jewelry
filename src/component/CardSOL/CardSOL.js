import React from "react";
import { Container } from "react-bootstrap";
import CartProduct from "../CardProduct/CartProduct";
import "./CardSOL.css";

const CardSOL = (prop) => {
  return (
    <Container>
      <div className="SOL">
        <div className="left">{prop.title}</div>
        <div className="right">
          <CartProduct></CartProduct>
        </div>
      </div>
    </Container>
  );
};

export default CardSOL;
