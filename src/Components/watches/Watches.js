import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../assets/images/banners/watchesBanner/WatchBanner0.jpg";
import ShowCards from "../common/ShowCards";
import { WatchesData } from "../../data/ShowcadsData";
const Watches = () => {
  return (
    <>
      <Container fluid className="g-0">
        <Row>
          <img src={Banner} alt="watches_banner" className="w-100 h-auto" />
        </Row>
        <Row>
          <Col>
            <ShowCards source={WatchesData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Watches;
