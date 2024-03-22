import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardNews from "../../CardNews/CardNews";
import "./NI.css";

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

const NI = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplayspeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="NI">
      <p className="Categories">NEWS & INSPIRED</p>
      <h1 className="title">Jewellery Style Files</h1>
      <Slider {...settings}>
        <CardNews></CardNews>
        <CardNews></CardNews>
        <CardNews></CardNews>
        <CardNews></CardNews>
        <CardNews></CardNews>
        <CardNews></CardNews>
        <CardNews></CardNews>
      </Slider>
    </div>
  );
};

export default NI;
