import React from "react";
import "./CardNews.css";
import blog1 from "../../assets/blog/1.jpg";

const CardNews = () => {
  return (
    <div className="Card_news">
      <div className="thumb">
        <img src={blog1} alt="" />
      </div>
      <div className="infor">
        <div className="date">
          <p>
            September 9, 2023 <span>- By</span> Admin
          </p>
        </div>
        <div className="title">
          <h4>Paris Couture Week 2022- Big & Bold Jewelry</h4>
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
            vitae maiores at animi eligendi sit quod corporis quaerat
            perspiciatis sapiente velit fuga? Saepe ullam voluptates
            consequuntur tempora iure fuga sapiente!
          </p>
        </div>
        <p className="view">View More</p>
      </div>
    </div>
  );
};

export default CardNews;
