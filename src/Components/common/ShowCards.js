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
      <Container fluid>
        <Row className="my-5 g-0">
          <Col id="showcards_title">
            <h1> {title} </h1>
            <p>{subTitle}</p>
          </Col>
        </Row>
        <Row className="g-0">
          {products.map((cur) => {
            return (
              <Col
                id="cards_holder"
                className="mx-auto"
                sm={6}
                md={4}
                lg={2}
                key={cur.id}
              >
                <Card id="show_card">
                  <div id="card_image_waffer">
                    <Card.Img
                      variant="top"
                      src={cur.image}
                      id="show_card_image"
                      className="mx-auto"
                    />
                  </div>
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
