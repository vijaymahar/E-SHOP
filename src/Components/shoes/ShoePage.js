import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShowCards from "../common/ShowCards";
import { shoeData } from "../../data/ShowcadsData";

import Banner from "../../assets/images/banners/shoesbanner/shoeBanner1.png";
const ShoePage = () => {
  return (
    <>
      <Container fluid className="g-0">
        <Row>
          <img src={Banner} alt="banner_shoes" className="w-100 h-auto" />
        </Row>
        <Row className="g-0">
          <Col className="g-0">
            <ShowCards source={shoeData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShoePage;
