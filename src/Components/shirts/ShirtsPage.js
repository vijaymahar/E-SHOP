import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";
// import ShirtsBanner from "../../assets/images/banners/shirtsBanner/men&women_banner.png";
import banner from "../../assets/images/banners-main/shirtsBanner1.jpg";
import Banner1 from "../../assets/images/banners/shirtsBanner/banner5.png";
import ShowCards from "../common/ShowCards";
import { shirtsData } from "../../data/ShowcadsData";
import {
  Brands,
  SortBy,
  Categories,
  Price,
  Color,
  Discount,
} from "../../data/FilterData";
const ShirtsPage = () => {
  const [value, setValue] = useState(10);
  const [condition, setCondition] = useState(true);
  const [loadbtn, setLoadbtn] = useState("+ show more");
  // color filter
  const [num, setNum] = useState(10);
  const [logic, setLogic] = useState(true);
  const [showBtn, setShowbtn] = useState("+ show more");
  // color filter

  // FILTER ADDING //
  const [filterName, setFilter] = useState([]);
  // FILTER ADDING //
  const showMore = () => {
    if (!condition) {
      setValue(10);
      setLoadbtn("+ show more");
      setCondition(true);
    } else {
      setValue(Infinity);
      setLoadbtn("- show less");
      setCondition(false);
    }
  };
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

  // ADD FILTER HANDLER //
  const addFilter = (name) => {
    setFilter([
      ...filterName,
      {
        id: new Date().getTime(),
        addedFilter: name,
      },
    ]);
    console.log(filterName);
  };
  // ADD FILTER HANDLER //

  // REMOVE FILTER //
  const removeFilter = (id) => {
    const newFilterList = filterName.filter((cur) => {
      return cur.id !== id;
    });
    setFilter(newFilterList);
  };
  // REMOVE FILTER //
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
        <Row className="d-flex g-0">
          <Col md={2} className="px-2">
            <span className="lead fw-bold text-center ms-4">Filters</span>
            <Row>
              {/*side part*/}
              <Col md={12} lg={12} className="border my-2">
                {/*brands*/}
                <p className="brand_types">shop by brands</p>
                {Brands.slice(0, value).map((cur) => {
                  return (
                    <div
                      className="col-12"
                      key={cur.id}
                      onClick={() => addFilter(cur.name)}
                    >
                      <div
                        className="form-check text-dark ms-2 my-2"
                        id="brandList"
                      >
                        <label
                          htmlFor={`brand${cur.id}`}
                          className="form-check-label ms-1"
                        >
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`brand${cur.id}`}
                          />
                          {cur.name}
                        </label>
                      </div>
                    </div>
                  );
                })}
                <button id="loadMore_btn" onClick={showMore}>
                  {loadbtn}
                </button>
              </Col>
              {/*brands*/}
              {/*categories*/}
              <Col md={12} lg={12} className="border my-2">
                <p className="brand_types">shop by Category</p>
                {Categories.map((cur) => {
                  return (
                    <Col md={12} lg={12} key={cur.id}>
                      <Form.Check type="checkbox">
                        <Form.Check.Label id="catrgory_label">
                          <Form.Check.Input
                            type="checkbox"
                            id="category_check"
                          />
                          {cur.type}
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>
                  );
                })}
              </Col>
              {/*categories*/}
              {/* price */}
              <Col md={12} lg={12} className="border my-2">
                <p className="brand_types">shop by Price</p>
                {Price.map((cur) => {
                  return (
                    <Col md={12} lg={12} key={cur.id}>
                      <Form.Check type="checkbox">
                        <Form.Check.Label id="catrgory_label">
                          <Form.Check.Input
                            type="checkbox"
                            id="category_check"
                          />
                          {cur.name}
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>
                  );
                })}
              </Col>
              {/* price */}
              {/* color */}
              <Col md={12} lg={12} className="border">
                <p className="brand_types">shop by Color</p>
                {Color.slice(0, num).map((cur) => {
                  const { code } = cur;
                  return (
                    <Col md={12} lg={12} key={cur.id}>
                      <Form.Check type="checkbox">
                        <Form.Check.Label id="catrgory_label">
                          <Form.Check.Input
                            type="checkbox"
                            id="category_check"
                            style={{ background: code }}
                          />
                          {cur.color}
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>
                  );
                })}
                <button id="loadMore_btn" onClick={viewMore}>
                  {showBtn}
                </button>
              </Col>
              {/* color */}
              {/* discount */}
              <Col md={12} lg={12} className="border">
                <p className="brand_types">shop by Dscount</p>
                {Discount.map((cur) => {
                  return (
                    <Col md={12} lg={12} key={cur.id}>
                      <Form.Check type="checkbox">
                        <Form.Check.Label id="catrgory_label">
                          <Form.Check.Input
                            type="checkbox"
                            id="category_check"
                          />
                          {cur.range}
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>
                  );
                })}
              </Col>
              {/* discount */}
            </Row>
            {/*side part*/}
          </Col>
          {/* ========================================================= */}
          {/*main part*/}
          <Col md={10} id="select_capsul">
            <Col md={8} lg={8}>
              {filterName.length !== 0
                ? filterName.map((cur) => {
                    return (
                      <button id="filter_button" key={cur.id}>
                        {cur.addedFilter}
                        <TiDeleteOutline
                          onClick={() => removeFilter(cur.id)}
                          id="filterbtn_delete"
                        />
                      </button>
                    );
                  })
                : null}
            </Col>
            <Col md={2} lg={2} className="ms-auto">
              <select id="sort_by">
                <option value="1">sort by</option>
                {SortBy.map((cur) => {
                  return (
                    <option value={cur.name} key={cur.id}>
                      {cur.name}
                    </option>
                  );
                })}
              </select>
            </Col>
          </Col>
          {/*main part*/}
        </Row>
      </Container>
    </>
  );
};

export default ShirtsPage;
