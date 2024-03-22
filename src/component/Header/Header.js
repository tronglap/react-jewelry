import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useCart } from "../../UseContext";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavBar = () => {
    setIsActive(!isActive);
  };

  const { cartItems } = useCart();

  return (
    <div className="nav">
      <div className="left">
        <div className="bar" onClick={toggleNavBar}>
          Menu
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <p>Search...</p>
        </div>
      </div>
      <div className="mid">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="register">
          <a href="/">Register/Login</a>
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
      <div className={`NavBar ${isActive ? "active" : ""}`}>
        <div className="icon_close" onClick={toggleNavBar}>
          <span className="Menu">Menu</span>
          <div className="icon">
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
        </div>
        <Link to="/" className="Home">
          Home
          <i className="fa-solid fa-angle-right"></i>
        </Link>
        <Link to="/list-product" className="Shop">
          Shop
          <i className="fa-solid fa-angle-right"></i>
        </Link>
        <div className="Categories">
          Categories
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <div className="Blog">
          Blog
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <div className="Contact">
          Contact
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
