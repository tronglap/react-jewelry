import React from "react";
import Header from "../Header/HeaderMain/Header";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const OS = () => {
  return (
    <div>
      <Header />
      <Container>
        <div>
          <h1>Success</h1>
          <Link to="/list-product">
            <Button title="Return to shop"></Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default OS;
