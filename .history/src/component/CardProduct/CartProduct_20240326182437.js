import React from "react";
import "./CartProduct.css";
import { Link } from "react-router-dom";

const CartProduct = (prop) => {
  const isPromotionActive = prop.promotion === "0" || prop.promotion === "";

  return (
    <div className="Card_item" key={prop.id}>
      <div className="thumb">
        <Link to={`/detail/${prop.id}`}>
          <img src={prop.image} alt={prop.name} />
          <img src={prop.image_second} alt={prop.name} />
        </Link>
      </div>
      <div className={`sale ${prop.sale ? "active" : ""}`}>sale</div>
      <div className="info">
        <div className="cate">{prop.CategoryId}</div>
        <Link to={`/detail/${prop.id}`} className="name">
          {prop.name}
        </Link>
        <div className="material">{prop.material}</div>
        <div className="price">
          <span className={`discount ${isPromotionActive ? "active" : ""}`}>
            ${prop.promotion}
            <span> - </span>
          </span>
          <span className={`cost ${isPromotionActive ? "active" : ""}`}>
            ${prop.cost}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
