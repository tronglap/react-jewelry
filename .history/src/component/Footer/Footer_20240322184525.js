import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <Row>
          <Col lg={3}>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="slogan">
              <p>Embrace Your Glow</p>
              <p> Where Beauty Meets Jewelry</p>
            </div>
            <div className="social-links">
              <a href="/">
                <i className="fa-brands fa-facebook-f fa-xs"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-instagram fa-xs"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-pinterest-p fa-xs"></i>
              </a>
            </div>
          </Col>
          <Col lg={3}>
            <h6 className="title">SHOPPING ONLINE</h6>
            <ul>
              <li>Jewellery Materials</li>
              <li>Sizing Children’s Jewellery</li>
              <li>Delivery & Returns</li>
              <li>Order Tracking</li>
              <li>FAQs</li>
            </ul>
          </Col>
          <Col lg={3}>
            <h6 className="title">ABOUT US</h6>
            <ul>
              <li>Our Story</li>
              <li>Gift Wrap</li>
              <li>Engraving</li>
              <li>Jewellery Care</li>
              <li>World of Molly Brown London</li>
            </ul>
          </Col>
          <Col lg={3}>
            <h6 className="title">ACCOUNT</h6>
            <ul>
              <li>
                Head Office: 31/2 Nguyễn Bỉnh Khiêm, Phường ĐaKao, Quận 1,
                TP.HCM
              </li>
              <li>Tel: 093 8386 086 </li>
              <li>Email: hello@react-jewelry.com</li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Footer;
