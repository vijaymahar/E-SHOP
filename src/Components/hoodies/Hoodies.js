import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../assets/images/banners/hoodiesBanner/hoodieBanner.jpg";
import ShowCards from "../common/ShowCards";
import { hoodieData } from "../../data/ShowcadsData";
const Hoodies = () => {
  return (
    <>
      <Container fluid className="g-0">
        <Row>
          <img src={Banner} alt="hoodie_banner" className="w-100 h-auto" />
        </Row>
        <Row className="g-0">
          <Col className="g-0">
            <ShowCards source={hoodieData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hoodies;
