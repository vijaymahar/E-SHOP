import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../assets/images/banners/hoodiesBanner/hoodieBanner.jpg";
import ShowCards from "../common/ShowCards";
import { hoodieData } from "../../data/ShowcadsData";
const Hoodies = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <img src={Banner} alt="hoodie_banner" className="w-100 h-auto" />
        </Row>
        <Row>
          <Col>
            <ShowCards source={hoodieData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hoodies;
