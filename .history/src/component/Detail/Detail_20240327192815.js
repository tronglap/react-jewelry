import React, { useEffect, useState } from "react";
import Header from "../Header/HeaderMain/Header";
import "./Detail.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../Button/Button";
import UseFetch from "../../UseFetch";
import { useParams } from "react-router-dom";
import OB from "../Home/OURBESTSELLING/OB";
import { useCart } from "../../UseContext";
import { toast } from "react-toastify";

const Detail = () => {
  const { slug: id } = useParams();
  const DetailProduct = UseFetch(
    `https://65f3b3d2105614e654a0e686.mockapi.io/Product/${id}`
  );
  const isPromotionActive =
    DetailProduct.promotion === "0" || DetailProduct.promotion === "";

  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [id]);

  const handleChangeValue = (type) => {
    if (type === "plus" && count < DetailProduct.count && count >= 1) {
      setCount(count + 1);
    }
    if (type === "minus" && count > 1) {
      setCount(count - 1);
    }
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    toast.warn("Add cart successed !", {
      icon: ({ theme, type }) => <img src={DetailProduct.image} />,
      position: "top-center",
      autoClose: 3000,
    });
    addToCart({ ...DetailProduct, count: undefined }, count);
    setCount(1);
  };

  return (
    <div className="DetailProduct">
      <Header />
      <div className="box_detail">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="thumb">
                <img src={DetailProduct.image} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="infor">
                <div className="name">
                  <h1>{DetailProduct.name}</h1>
                </div>
                <div className="material">{DetailProduct.material}</div>
                <div className="price">
                  <span
                    className={`discount ${isPromotionActive ? "active" : ""}`}
                  >
                    ${DetailProduct.promotion}
                  </span>
                  <span> </span>
                  <span className={`cost ${isPromotionActive ? "active" : ""}`}>
                    ${DetailProduct.cost}
                  </span>
                </div>
                <div className="instock">
                  <p>In Stock</p>
                </div>
                <div className="shortdesc">
                  <p>{DetailProduct.desc}</p>
                </div>
                <div className="icon">
                  <div className="d-flex align-items-center gap-2 text-color">
                    <i className="fa-regular fa-message"></i>
                    <p className="m-0">Free returns</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-color">
                    <i className="fa-solid fa-truck-fast"></i>
                    <p className="m-0">
                      Free shipping via DHL, fully insured All
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-color ">
                    <i className="fa-regular fa-square-check"></i>
                    <p className="m-0">taxes and customs duties included</p>
                  </div>
                </div>
              </div>
              <Row className="addtocart">
                <Col lg={4} className="count">
                  <button
                    className="minus"
                    onClick={() => handleChangeValue("minus")}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <input
                    type="number"
                    value={count}
                    min="1"
                    max={DetailProduct.count}
                    readOnly
                  />
                  <button
                    className="plus"
                    onClick={() => handleChangeValue("plus")}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </Col>
                <Col lg={4}>
                  <Button
                    title="ADD TO CART"
                    onClick={handleAddToCart}
                  ></Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="row-2">
            <OB id={id} title="Related products"></OB>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Detail;
