import React from "react";
import Banner from "../../assets/images/banners/combosBanner/comboBanner1.png";
import ShowCards from "../common/ShowCards";
import { ComboData } from "../../data/ShowcadsData";
import { Container, Row, Col } from "react-bootstrap";
const Combos = () => {
  return (
    <>
      <Container fluid className="g-0">
        <Row>
          <img src={Banner} alt="combos_banner" />
        </Row>
        <Row className="g-0">
          <Col className="g-0">
            <ShowCards source={ComboData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Combos;
