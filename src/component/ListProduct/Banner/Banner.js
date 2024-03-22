import React from "react";
import "./Banner.css";
import banner from "../../../assets/banner/list_product.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="thumb">
        <img src={banner} alt="" />
      </div>
      <div className="content">
        <div className="title">SHOP</div>
        <div className="link_header">
          <Link to="/" className="Home">
            <i className="fa-solid fa-house"></i>
            Home Page
          </Link>
          <div className="icon">
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <Link to="/list-product" className="Shop">
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
