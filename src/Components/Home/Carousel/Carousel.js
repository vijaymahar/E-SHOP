import React from "react";
import { Carousel } from "react-bootstrap";
import { CarouselData } from "./CarouselData/CarouselData";

const Carousell = () => {
  return (
    <>
      <Carousel>
        {CarouselData.map((data, ind) => {
          return (
            <Carousel.Item key={ind}>
              <img className="d-block w-100" src={data.image} alt={data.alt} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default Carousell;
