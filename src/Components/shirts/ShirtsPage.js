import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ShirtsBanner from "../../assets/images/banners/shirtsBanner/men&women_banner.png";
import banner from "../../assets/images/banners-main/shirtsBanner1.jpg";
import Banner1 from "../../assets/images/banners/shirtsBanner/banner5.png";
import ShowCards from "../common/ShowCards";
import { shirtsData } from "../../data/ShowcadsData";
const ShirtsPage = () => {
  return (
    <>
      <Container fluid className="g-0">
        <Row className="g-0">
          <img src={banner} className="h-auto w-100" alt="banner" />
        </Row>
        <Row className="g-0">
          <Col className="g-0">
            <ShowCards source={shirtsData} />
          </Col>
        </Row>
        <Row>
          <img src={Banner1} alt="banner" className="w-100 h-auto my-5" />
        </Row>
      </Container>
    </>
  );
};

export default ShirtsPage;
