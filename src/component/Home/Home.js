import React from "react";
import SliderBar from "../SliderBar/SliderBar";
import WWD from "./WWD/WWD";
import "./Home.css";
import Categories from "./Categories/Categories";
import OB from "./OURBESTSELLING/OB";
import NI from "./NEWS&INSPIRED/NI";
import Header from "../Header/Header";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div className="bg_home">
      <Header></Header>
      <SliderBar></SliderBar>
      <Container>
        <WWD></WWD>
        <Categories></Categories>
        <div className="row_home">
          <OB
            slide_product="OUR BESTSELLING"
            title="Our Jewelry Selection"
          ></OB>
        </div>
        <div className="row_home">
          <NI></NI>
        </div>
      </Container>
    </div>
  );
};

export default Home;
