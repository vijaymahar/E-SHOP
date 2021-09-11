import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ShirtsBanner from "../../assets/images/banners/shirtsBanner/men&women_banner.png";
import banner from "../../assets/images/banners-main/shirtsBanner1.jpg";
import ShowCards from "../common/ShowCards";
import { shirtsData } from "../../data/ShowcadsData";
const ShirtsPage = () => {
  return (
    <>
      <Container fluid className="g-0">
        <Row>
          <img src={banner} className="h-auto w-100" alt="banner" />
        </Row>
        <Row>
          <Col className="g-0">
            <ShowCards source={shirtsData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShirtsPage;
