import React from "react";
import { Col, Form } from "react-bootstrap";
const FilterPrice = (props) => {
  return (
    <>
      <p className="brand_types">shop by Price</p>
      {props.price.map((cur) => {
        return (
          <Col
            md={12}
            lg={12}
            key={cur.id}
            onClick={() => props.addFilter(cur.name)}
          >
            <Form.Check type="checkbox">
              <Form.Check.Label id="catrgory_label">
                <Form.Check.Input type="checkbox" id="category_check" />
                {cur.name}
              </Form.Check.Label>
            </Form.Check>
          </Col>
        );
      })}
    </>
  );
};

export default FilterPrice;
