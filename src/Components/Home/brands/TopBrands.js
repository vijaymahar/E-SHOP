import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const TopBrands = ({ data }) => {
  const [product, setProducts] = useState([]);

  const { url, title, subTitle } = data;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setProducts(response));
    console.log(product);
  }, []);
  return (
    <>
      <Container fluid className="g-0 my-5" id="toBrandsContainer">
        <Row className="mb-5 bg-light">
          <Col id="title_style">
            <h1>{title}</h1>
            <p>{subTitle}</p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          {product.map((product) => {
            return (
              <Col
                id="category_images"
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                className="mx-auto"
              >
                <img
                  src={product.image}
                  alt={product.image}
                  className="mb-5"
                  id="category_image"
                  // style={{ width: "15em", height: "22em" }}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default TopBrands;
