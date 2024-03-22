import React, { useState } from "react";
import "./Cart.css";
import Header from "../Header/HeaderMain/Header";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useCart } from "../../UseContext";

const Cart = () => {
  const { cartItems } = useCart();
  const [listCart, setListCard] = useState(cartItems);

  const { isPromotion } =
    listCart.promotion === " " || listCart.promotion === "0";

  const handleChange = (id, type) => {
    const newCart = [...listCart];
    const indexProduct = listCart.findIndex((item) => item.id === id);
    if (type === "plus") {
      newCart[indexProduct].quantity++;
    }
    if (type === "minus" && newCart[indexProduct].quantity > 1) {
      newCart[indexProduct].quantity--;
    }
    setListCard(newCart);
    localStorage.setItem("LIST_CART", JSON.stringify(newCart));
  };

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
                <Row className="title d-flex align-items-center justify-content-center p-3 border-top border-bottom ">
                  <Col></Col>
                  <Col>Image</Col>
                  <Col>Product</Col>
                  <Col>Price</Col>
                  <Col>Quantity</Col>
                  <Col>Subtotal</Col>
                </Row>
              </Col>
              <Col>
                {listCart &&
                  listCart.map((item) => (
                    <Row
                      key={item.id}
                      className="d-flex align-items-center justify-content-center p-3 border-bottom "
                    >
                      <Col>X</Col>
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
                      <Col>
                        <div className="price d-flex align-items-center justify-content-center ">
                          <span>$</span>
                          <p>
                            {item.isPromotion ? item.isPromotion : item.cost}
                          </p>
                        </div>
                      </Col>
                      <Col>
                        <div className="quantity d-flex">
                          <button
                            className="minus"
                            onClick={() => handleChange(item.id, "minus")}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <input type="number" value={item.quantity} readOnly />
                          <button
                            className="plus"
                            onClick={() => handleChange(item.id, "plus")}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </Col>
                      <Col>
                        <div className="subtotal">
                          <p>
                            <span>$</span>
                            {(item.isPromotion ? item.isPromotion : item.cost) *
                              item.quantity}
                            .00
                          </p>
                        </div>
                      </Col>
                    </Row>
                  ))}
              </Col>
            </Col>
            <Col lg={4}>
              <div className="cart-total">
                <h1>Cart </h1>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
