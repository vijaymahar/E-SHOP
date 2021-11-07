import React, { useState, useEffect } from "react";
import { Form, Col } from "react-bootstrap";

const FilterColors = (props) => {
  const [num, setNum] = useState(10);
  const [logic, setLogic] = useState(true);
  const [showBtn, setShowbtn] = useState("+ show more");

  const viewMore = () => {
    if (!logic) {
      setNum(10);
      setShowbtn("+ show more");
      setLogic(true);
    } else {
      setNum(Infinity);
      setShowbtn("- show less");
      setLogic(false);
    }
  };
  return (
    <>
      <p className="brand_types">shop by Color</p>
      {props.Color.slice(0, num).map((cur) => {
        const { code } = cur;
        return (
          <Col
            md={12}
            lg={12}
            key={cur.id}
            onClick={() => props.addFilter(cur.name)}
          >
            <Form.Check type="checkbox">
              <Form.Check.Label id="catrgory_label">
                <Form.Check.Input
                  type="checkbox"
                  id="category_check"
                  style={{ backgroundColor: code }}
                />
                {cur.name}
              </Form.Check.Label>
            </Form.Check>
          </Col>
        );
      })}
      <button id="loadMore_btn" onClick={viewMore}>
        {showBtn}
      </button>
    </>
  );
};

export default FilterColors;
