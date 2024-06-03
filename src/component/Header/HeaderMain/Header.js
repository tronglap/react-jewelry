import React from "react";
import "./Header.css";
import logo from "../../../assets/logo/logo.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../../UseContext";

const Header = () => {
  const { cartItems } = useCart();

  return (
    <Container fluid>
      <div className="HeaderMain">
        <div className="left">
          <Link to="/" className="Home">
            Home<i className="fa-solid fa-angle-down"></i>
          </Link>
          <Link to="/list-product" className="Shop">
            Shop<i className="fa-solid fa-angle-down"></i>
          </Link>
          <div className="Categories">
            Categories<i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="Blog">
            Blog<i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="Contact">
            Contact<i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div className="mid">
          <div className="thumb">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="register">
            <a href="/">Register/Login</a>
          </div>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <Link to="/Cart" className="cart">
            <svg
              fill="#000000"
              width="30px"
              height="30px"
              viewBox="0 0 256.00 256.00"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.00256"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path d="M216,44H40A12.01312,12.01312,0,0,0,28,56V200a12.01312,12.01312,0,0,0,12,12H216a12.01312,12.01312,0,0,0,12-12V56A12.01312,12.01312,0,0,0,216,44ZM40,52H216a4.00427,4.00427,0,0,1,4,4V76H36V56A4.00427,4.00427,0,0,1,40,52ZM216,204H40a4.00427,4.00427,0,0,1-4-4V84H220V200A4.00427,4.00427,0,0,1,216,204Zm-44-92a44,44,0,0,1-88,0,4,4,0,0,1,8,0,36,36,0,0,0,72,0,4,4,0,0,1,8,0Z" />
              </g>
            </svg>
            <span className="count" disabled>
              {cartItems.length}
            </span>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
