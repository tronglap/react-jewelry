import React from "react";
import "./Button.css";

const Button = ({ title, onClick, type }) => {
  return (
    <button type={type} className="shop-now" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
