import React from "react";
import "./Button.css";

const Button = ({ title, onClick }) => {
  return (
    <button className="shop-now" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
