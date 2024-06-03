import { Carousel } from "react-bootstrap";
import Button from "../Button/Button";
import "./SliderBar.css";
import React from "react";
import slider1 from "../../assets/banner/slider_1.png";
import slider2 from "../../assets/banner/slider_2.jpg";
import slider3 from "../../assets/banner/slider_3.jpg";
import slider4 from "../../assets/banner/slider_4.jpg";
import { Link } from "react-router-dom";

const SliderBar = () => {
  return (
    <div className="banner">
      <Carousel fade>
        <Carousel.Item interval={3000} className="slide-1">
          <img src={slider1} alt="" />
          <Carousel.Caption>
            <h3>Finest Jewelry</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Link to="/list-product">
              <Button title="SHOP NOW"></Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src={slider2} alt="" />
          <Carousel.Caption>
            <h3>Finest Jewelry</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Link to="/list-product">
              <Button title="SHOP NOW"></Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src={slider3} alt="" />
          <Carousel.Caption>
            <h3>Finest Jewelry</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Link to="/list-product">
              <Button title="SHOP NOW"></Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src={slider4} alt="" />
          <Carousel.Caption>
            <h3>Finest Jewelry</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Link to="/list-product">
              <Button title="SHOP NOW"></Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SliderBar;
