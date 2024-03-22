import React, { useState, useEffect } from "react";
import CartProduct from "../../CardProduct/CartProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OB.css";
import UseFetch from "../../../UseFetch";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const OB = (prop) => {
  const products = UseFetch(
    "https://65f3b3d2105614e654a0e686.mockapi.io/Product"
  );
  const categories = UseFetch(
    "https://65f3b3d2105614e654a0e686.mockapi.io/Categories"
  );

  const [arrOB, setarrOB] = useState([]);

  useEffect(() => {
    if (prop.id) {
      const newOB = products.filter((product) => product.id !== prop.id);
      setarrOB(newOB);
    } else {
      const newOB = products.filter((product) => product.bestselling === true);
      setarrOB(newOB);
    }
  }, [products]);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "ease",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="OB">
      <p className="Categories">{prop.slide_product}</p>
      <h1 className="title">{prop.title}</h1>
      <Slider {...settings}>
        {arrOB.map((product) => (
          <CartProduct
            key={product.id}
            id={product.id}
            image={product.image}
            image_second={product.image_second}
            CategoryId={
              categories.find((category) => category.id === product.CategoryId)
                ?.categories
            }
            name={product.name}
            cost={product.cost}
            promotion={product.promotion}
            sale={product.sale}
            perdiscount={product.perdiscount}
            material={product.material}
          />
        ))}
      </Slider>
    </div>
  );
};

export default OB;
