import React from "react";
import Header from "../header/Header";
import { Container, Row, Col } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
