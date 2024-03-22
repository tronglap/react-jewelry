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
        <div className="">
          <Row>
            <Col lg="6"></Col>
            <Col lg="6">
              <div className="bill">
                <div className="cart-total border-bottom">
                  <h2>Cart totals</h2>
                </div>
                <div className="total-product border-bottom">
                  <p>Product</p>
                  <div className="number">{Checkoutcart.length}</div>
                </div>
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
                  <Link className="btn-proceed" to="/checkout">
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

export default Checkout;
