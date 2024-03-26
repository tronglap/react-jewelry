import React, { useState, useEffect } from "react";
import "./ToTop.css";
import angleup from "../../assets/icon/download.svg";

const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`ToTop ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <div className="thumb">
        <img src={angleup} alt="" />
      </div>
    </div>
  );
};

export default ToTop;
