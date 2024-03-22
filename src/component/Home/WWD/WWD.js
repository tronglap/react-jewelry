import React from "react";
import { Col, Row } from "react-bootstrap";
import wwd from "../../../assets/wwd/H12-img-1.jpg";
import product1 from "../../../assets/product/1.jpg";
import "./WWD.css";

const WWD = () => {
  return (
    <div className="wwd">
      <Row>
        <Col lg={6}>
          <div className="left">
            <img src={wwd} alt="" />
          </div>
        </Col>
        <Col lg={6}>
          <Row>
            <div className="text">
              <div className="title">WHAT WE DO </div>
              <h1>Exquisite Jewelry For Every Occasion</h1>
              <p>
                for more than 25 years, we have made it our mission to sell
                gifts of love. jewellery that should excite and create
                long-lasting joy. jewelry that can be passed down as an heirloom
                and that carries a history.
              </p>
            </div>
          </Row>
          <Row>
            <div className="right">
              <img src={product1} alt="" />
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default WWD;
