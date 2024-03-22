import React from "react";
import "./Categories.css";
import { Col, Row } from "react-bootstrap";
import cate1 from "../../../assets/Cate/1.jpg";
import cate2 from "../../../assets/Cate/2.jpg";
import cate3 from "../../../assets/Cate/3.jpg";
import cate4 from "../../../assets/Cate/4.jpg";
import icon1 from "../../../assets/icon/gift-box.png";
import icon2 from "../../../assets/icon/diamond.png";
import icon3 from "../../../assets/icon/jewelry.png";

const Categories = () => {
  return (
    <div>
      <div className="icon_cate">
        <div className="icon1">
          <div className="img_icon">
            <div className="thumb">
              <img src={icon1} alt="" />
            </div>
          </div>
          <div className="title">Gift Package</div>
          <div className="desc">
            We'll choose the perfect gift box for your present.
          </div>
        </div>
        <div className="icon2">
          <div className="img_icon">
            <div className="thumb">
              <img src={icon2} alt="" />
            </div>
          </div>
          <div className="title">Diamond Selection</div>
          <div className="desc">
            Our consultants will help you to choose the right size.
          </div>
        </div>
        <div className="icon3">
          <div className="img_icon">
            <div className="thumb">
              <img src={icon3} alt="" />
            </div>
          </div>
          <div className="title">Design Your Ring</div>
          <div className="desc">
            Individual engraving to perpetuate the deepest feelings.
          </div>
        </div>
      </div>
      <div className="cate">
        <Row>
          <Col lg={6}>
            <div className="necklaces">
              <img src={cate1} alt="" />
            </div>
          </Col>
          <Col className="right" lg={6}>
            <Row>
              <Col>
                <div className="diamond">
                  <img src={cate2} alt="" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <div className="earrings">
                  <img src={cate3} alt="" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="rings">
                  <img src={cate4} alt="" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Categories;
