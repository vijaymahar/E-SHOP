import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "../../../assets/scss/main.css";
const Categories = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/top-Categoties")
      .then((res) => res.json())
      .then((response) => setProducts(response));
    // console.log(product);
  }, []);

  return (
    <>
      <Container fluid className="bg-light my-5" id="category_container">
        <Row>
          <Col id="title-style">
            <center id="category-title">
              <h1>SHOP BY CATEGORIES</h1>
              <p>top categories to add bag</p>
            </center>
          </Col>
        </Row>
        <Row className="w-100 mx-auto">
          {product.map((product) => {
            return (
              <Col id="category-images" sm={6} md={4} lg={2} key={product.id}>
                <img
                  src={product.image}
                  alt={product.id}
                  style={{ width: "200px", height: "auto" }}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Categories;
