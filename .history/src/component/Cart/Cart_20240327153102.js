import React, { useState } from "react";
import "./Cart.css";
import Header from "../Header/HeaderMain/Header";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useCart } from "../../UseContext";
import Button from "../Button/Button";

const Cart = () => {
  const { cartItems } = useCart();
  const [listCart, setListCard] = useState(cartItems);
  const isProduct = listCart.length > 0;

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

  const handleProceedToCheckout = () => {
    const storedCart = localStorage.getItem("LIST_CART");
    if (storedCart) {
      window.location.href = "/checkout";
    } else {
      window.location.reload();
    }
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
        <div className={`noti ${isProduct ? "active" : ""}`}>
          <h1>Oops!Your cart is currently empty.</h1>
          <Link to="/list-product">
            <Button title="Return to shop"></Button>
          </Link>
        </div>
        <div className={`cart-product ${isProduct ? "active" : ""}`}>
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
                      <Col>
                        <div className="delete-product">
                          <i className="fa-solid fa-xmark"></i>
                        </div>
                      </Col>
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
                            {(item.promotion
                              ? item.promotion
                              : item.cost
                            ).toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
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
                            {(
                              (item.promotion ? item.promotion : item.cost) *
                              item.quantity
                            ).toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  ))}
              </Col>
            </Col>
            <Col lg={4}>
              <div className="bill">
                <div className="cart-total border-bottom">
                  <h2>Cart totals</h2>
                </div>
                <div className="total-product border-bottom">
                  <p>Product</p>
                  <div className="number">{listCart.length}</div>
                </div>
                <div className="total border-bottom">
                  <p>Total</p>
                  <div className="price d-flex align-items-center">
                    <span>$</span>
                    <p>
                      {listCart
                        .reduce(
                          (total, item) =>
                            total +
                            (item.promotion
                              ? parseFloat(item.promotion)
                              : parseFloat(item.cost)) *
                              item.quantity,
                          0
                        )
                        .toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                    </p>
                  </div>
                </div>
                <div className="proceed-to-checkout">
                  <Link
                    className="btn-proceed"
                    onClick={handleProceedToCheckout}
                  >
                    <Button title="Proceed To Checkout"></Button>
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

export default Cart;
