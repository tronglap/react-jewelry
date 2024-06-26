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

  const [filterKeyword, setFilterKeyword] = useState("");
  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(filterKeyword.toLowerCase());
    });
    setProductFilter(filteredProducts);
  }, [filterKeyword, products]);

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

  const [isSortActive, setIsSortActive] = useState(false);
  const handleSortClick = () => {
    setIsSortActive(!isSortActive);
  };

  const [sortBy, setSortBy] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Default sort");

  const handleSort = (sortType) => {
    setSortBy(sortType);
    switch (sortType) {
      case "az":
        setSelectedFilter("Sort by A - Z");
        break;
      case "za":
        setSelectedFilter("Sort by Z - A");
        break;
      case "priceLH":
        setSelectedFilter("Sort by price: Low to High");
        break;
      case "priceHL":
        setSelectedFilter("Sort by price: High to Low");
        break;
      default:
        setSelectedFilter("Default sort");
        break;
    }
  };
  useEffect(() => {
    let sortedProducts = [...products];
    switch (sortBy) {
      case "az":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "priceLH":
        sortedProducts.sort((a, b) => {
          const priceA = parseFloat(a.promotion || a.cost);
          const priceB = parseFloat(b.promotion || b.cost);
          return priceA - priceB;
        });
        break;
      case "priceHL":
        sortedProducts.sort((a, b) => {
          const priceA = parseFloat(a.promotion || a.cost);
          const priceB = parseFloat(b.promotion || b.cost);
          return priceB - priceA;
        });
        break;
      default:
        break;
    }
    setProductFilter(sortedProducts);
  }, [sortBy, products]);

  return (
    <div className="ListProduct">
      <Header />
      <Banner />
      <div className="box_product">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="FBN">
                <p className="filterbyname">Filter by name</p>
                <input
                  type="text"
                  placeholder="Search name product..."
                  value={filterKeyword}
                  onChange={(e) => setFilterKeyword(e.target.value)}
                />
              </div>
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
                <p className="TO">TO</p>
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
                    <div className="sort" onClick={handleSortClick}>
                      <p>{selectedFilter}</p>
                      <i className="fa-solid fa-angle-down"></i>
                      <div className={`sorts ${isSortActive ? "active" : ""}`}>
                        <div
                          className="sortbya-z"
                          onClick={() => handleSort("az")}
                        >
                          <p>Sort by A - Z</p>
                        </div>
                        <div
                          className="sortbyz-a"
                          onClick={() => handleSort("za")}
                        >
                          <p>Sort by Z - A</p>
                        </div>
                        <div
                          className="sortbypricelh"
                          onClick={() => handleSort("priceLH")}
                        >
                          <p>Sort by price: Low to High</p>
                        </div>
                        <div
                          className="sortbypricehl"
                          onClick={() => handleSort("priceHL")}
                        >
                          <p>Sort by price: High to Low</p>
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
