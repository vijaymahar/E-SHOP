import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";

const ShowCards = ({ source }) => {
  const [products, setProducts] = useState([]);
  const { url, title, subTitle } = source;

  const fetchData = async () => {
    const response = await axios.get(url).catch((error) => console.log(error));
    setProducts(response.data);
    // console.log(response.data);
    console.log(url);
  };
  useEffect(() => {
    fetchData();
    // console.log(products);
  }, []);
  return (
    <>
      <Container className=" w-100">
        <Row className="my-5">
          <Col id="title_section">
            <h1> {title} </h1>
            <p>{subTitle}</p>
          </Col>
        </Row>
        <Row>
          {products.map((cur) => {
            return (
              <Col
                className="mx-auto d-flex justify-content-evenly"
                sm={6}
                md={4}
                lg={2}
                key={cur.id}
              >
                <Card id="show_card">
                  <Card.Img
                    variant="top"
                    src={cur.image}
                    id="show_card_image"
                  />
                  <Card.Body id="show_card_body">
                    <Card.Title className="card_title">{cur.title}</Card.Title>
                    <Card.Text className="card_text">{cur.about}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ShowCards;
