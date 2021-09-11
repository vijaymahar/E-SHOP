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
      <Container fluid className="mt-5">
        <Row>
          <Col id="title_style">
            <h1>SHOP BY CATEGORIES</h1>
            <p>top categories to add bag</p>
          </Col>
        </Row>
        <Row className="g-0" id="category_imge_section">
          {product.map((product) => {
            return (
              <Col
                id="category_images"
                className="mx-auto"
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.id}
                  id="category_image"
                  // style={{ width: "200px", height: "auto" }}
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
