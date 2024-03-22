import React from "react";
import Slider from "react-slick";
import CardSOL from "../../CardSOL/CardSOL";

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const SOL = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <CardSOL title="A"></CardSOL>
        <CardSOL title="B"></CardSOL>
        <CardSOL title="C"></CardSOL>
        <CardSOL title="D"></CardSOL>
      </Slider>
    </div>
  );
};

export default SOL;
