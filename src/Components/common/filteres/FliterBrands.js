import React, { useState, useRef, useEffect } from "react";
// import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngleUp,
//   faAngleDown,
//   faArrowDown,
// } from "@fortawesome/free-solid-svg-icons";
import { Form, Col } from "react-bootstrap";
const FliterBrands = (props) => {
  const [value, setValue] = useState(10);

  const [condition, setCondition] = useState(true);
  const [loadbtn, setLoadbtn] = useState(" + show more");
  const refId = useRef();
  const showMore = () => {
    if (!condition) {
      setValue(10);
      setLoadbtn(" + show more");
      setCondition(true);
    } else {
      setValue(Infinity);
      setLoadbtn("- show less");
      setCondition(false);
    }
  };

  useEffect(() => {
    props.setReff(refId.current);
  }, [props.addFilter]);
  // console.log(refId.current);
  return (
    <>
      <p className="brand_types">shop by brands</p>
      {props.brands.slice(0, value).map((cur) => {
        return (
          <Col
            md={12}
            lg={12}
            key={cur.id}
            onClick={() => props.addFilter(cur.name)}
            id="brandList"
          >
            <Form.Check type="checkbox">
              <Form.Check.Label className="ms-1">
                <Form.Check.Input type="checkbox" id={Date.now()} ref={refId} />
                {cur.name}
              </Form.Check.Label>
            </Form.Check>
          </Col>
        );
      })}
      <button id="loadMore_btn" onClick={showMore}>
        {loadbtn}
      </button>
    </>
  );
};

export default FliterBrands;
