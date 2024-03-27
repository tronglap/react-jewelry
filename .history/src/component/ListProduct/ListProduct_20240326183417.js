import React, { useEffect, useState } from "react";
import Header from "../Header/HeaderMain/Header";
import Banner from "./Banner/Banner";
import UseFetch from "../../UseFetch";
import CartProduct from "../CardProduct/CartProduct";
import { Col, Container, Row } from "react-bootstrap";
import "./ListProduct.css";

const ListProduct = () => {
  const products = UseFetch(
    "https://65f3b3d2105614e654a0e686.mockapi.io/Product"
  );
  const categories = UseFetch(
    "https://65f3b3d2105614e654a0e686.mockapi.io/Categories"
  );

  const [productFilter, setProductFilter] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    if (products.length > 0) {
      const prices = products.map((product) => {
        return parseFloat(product.promotion || product.cost);
      });
      const highestPrice = Math.max(...prices);
      setMaxPrice(highestPrice);
    }
  }, [products]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      if (product.promotion === "" || product.promotion === "0") {
        const productPrice = parseFloat(product.cost);
        return productPrice >= minPrice && productPrice <= maxPrice;
      } else {
        const productPrice = parseFloat(product.promotion);
        return productPrice >= minPrice && productPrice <= maxPrice;
      }
    });
    setProductFilter(filteredProducts);
  }, [minPrice, maxPrice, products]);

  useEffect(() => {
    const sortProduct = [...products].sort((a, b) => {
      const priceA = parseFloat(a.promotion || a.cost);
      const priceB = parseFloat(b.promotion || b.cost);

      return priceA - priceB;
    });
    setProductFilter(sortProduct);
  }, [products]);

  useEffect(() => {
    const counts = {};
    products.forEach((product) => {
      counts[product.CategoryId] = (counts[product.CategoryId] || 0) + 1;
    });
    setCategoryCounts(counts);
  }, [products]);

  const FilterProduct = (cate) => {
    const filter = products.filter((ct) => ct.CategoryId === cate);
    setProductFilter(filter);
  };

  return (
    <div className="ListProduct">
      <Header />
      <Banner />
      <div className="box_product">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="Product_Categories">Product Categories</div>
              <div className="Categories">
                {categories.map((ct) => (
                  <div
                    className="diamonds"
                    onClick={() => FilterProduct(ct.id)}
                    key={ct.id}
                  >
                    <div className="name"> {ct.categories}</div>
                    <div className="count">
                      {categoryCounts[ct.id] && `${categoryCounts[ct.id]}`}
                    </div>
                  </div>
                ))}
              </div>
              <div className="FBP">
                <p className="filterbyprice">Price</p>
                <input
                  type="number"
                  placeholder="$ 0.00"
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                to
                <input
                  type="number"
                  placeholder="$ 100000.00"
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </Col>
            <Col lg={9}>
              <Row>
                <Container>
                  <div className="sorting">
                    <div className="Count_AP">
                      Show {productFilter.length} product of {products.length}{" "}
                      results
                    </div>
                    <div className="soft">
                      <p>Default soft</p>
                      <div className="softs">
                        <div className="softbya-z">
                          <p>Soft by A - Z</p>
                        </div>
                        <div className="softbyz-a">
                          <p>Soft by Z - A</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </Row>
              <Row>
                {productFilter &&
                  productFilter.map((item) => (
                    <Col lg={4} className="Cart_list" key={item.id}>
                      <CartProduct
                        id={item.id}
                        image={item.image}
                        image_second={item.image_second}
                        CategoryId={
                          categories.find(
                            (category) => category.id === item.CategoryId
                          )?.categories
                        }
                        name={item.name}
                        cost={item.cost}
                        promotion={item.promotion}
                        sale={item.sale}
                        perdiscount={item.perdiscount}
                      />
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ListProduct;
