import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
const ProductCard = ({ data }) => {
  console.log(data.length, "shirts page data");
  return (
    <div className="mt-5 ms-5">
      <Row className="g-0">
        {data.slice(0, 12).map((cur) => {
          return (
            <Col
              id="card_holder"
              className="mx-auto"
              sm={6}
              md={4}
              lg={3}
              key={cur.id}
            >
              <Link to={`/shirts/${cur.id}`}>
                <Card id="card_box" className="mb-5">
                  <div id="card_waffer">
                    <Card.Img
                      variant="top"
                      src={cur.image}
                      id="card_image"
                      className="mx-auto"
                    />
                  </div>
                  <Card.Body id="card_body">
                    <Card.Title className="card_title">{cur.name}</Card.Title>
                    <Card.Text className="card_text">{cur.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProductCard;
