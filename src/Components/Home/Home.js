import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousell from "./Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import fetchAllProducts from "../../redux/actions/TopBrandsAction";
import Categories from "./categories/Categories";
import TopBrands from "./brands/TopBrands";
import { AllBradsData } from "./brands/AllBrandsFile/AllBrandsData";
const Home = () => {
  const products = useSelector((state) => state.TopBrandsReducer.productData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
    console.log(products);
  }, []);

  return (
    <>
      <Container fluid className="g-0 w-100">
        <Row>
          <Carousell />
        </Row>
        <Row className="g-0 p-0">
          <Categories />
        </Row>
        {AllBradsData.map((cur, ind) => {
          return (
            <Row key={ind}>
              <TopBrands data={cur} />
            </Row>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
