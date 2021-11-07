import React, { useState, useRef, useEffect, memo } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
// import ShirtsBanner from "../../assets/images/banners/shirtsBanner/men&women_banner.png";
import banner from "../../assets/images/banners-main/shirtsBanner1.jpg";
import Banner1 from "../../assets/images/banners/shirtsBanner/banner5.png";
import ShowCards from "../common/ShowCards";
import { shirtsData } from "../../data/ShowcadsData";
import FliterBrands from "../common/filteres/FliterBrands";
import {
  Brands,
  SortBy,
  Categories,
  Price,
  Color,
  Discount,
} from "../../data/FilterData";
import FilterPrice from "../common/filteres/FilterPrice";
import FilterCategory from "../common/filteres/FilterCategory";
import FilterColors from "../common/filteres/FilterColors";
import FilterDiscount from "../common/filteres/FilterDiscount";
import SortByFilter from "../common/filteres/SortByFilter";
import fetchShirtsData from "../../redux/actions/ShirtsPageAction";
import ProductCard from "../common/ProductCard";
const ShirtsPage = () => {
  // FILTER ADDING //
  const [condition, setCondition] = useState(true);
  const [filterName, setFilter] = useState([]);
  const [reff, setReff] = useState();
  const [deleteAll, setDeleteAll] = useState("");
  // FILTER ADDING //

  const shirtsState = useSelector(
    (state) => state.ShirtsDataReducer.shirtsData
  );
  const dispatch = useDispatch();
  // console.log(shirtsState);
  // ADD FILTER HANDLER //
  const addFilter = (name) => {
    if (!condition) {
      setCondition(true);
    } else {
      setFilter([
        ...filterName,
        {
          id: new Date().getTime(),
          addedFilter: name,
        },
      ]);
      setDeleteAll("remove all");
      setCondition(false);
    }
  };
  // ADD FILTER HANDLER //

  // REMOVE FILTER //
  const removeFilter = (id) => {
    // reff.checked = false;
    // console.log(id);
    const newFilterList = filterName.filter((cur) => {
      return cur.id !== id;
    });
    setFilter(newFilterList);
  };
  // REMOVE FILTER //

  // REMOVE ALL FILTER //

  const deleteFilters = () => {
    setFilter([]);
    setDeleteAll("");
  };

  // REMOVE ALL FILTER //

  useEffect(() => {
    dispatch(fetchShirtsData());
  }, []);
  return (
    <>
      <Container fluid className="g-0">
        {/* banner */}
        <Row className="g-0">
          <img src={banner} className="h-auto w-100" alt="banner" />
        </Row>
        {/* banner */}
        {/* show cards */}
        <Row className="g-0">
          <Col className="g-0">
            <ShowCards source={shirtsData} />
          </Col>
        </Row>
        {/* show cards */}
        <Row>
          <img src={Banner1} alt="banner" className="w-100 h-auto my-5" />
        </Row>
        {/*side part*/}
        <Row className="d-flex g-0">
          <Col md={2} className="px-2">
            <span className="lead fw-bold text-center ms-4">Filters</span>

            {deleteAll !== "" && (
              <button id="removeAll" onClick={deleteFilters}>
                <span></span>
                {deleteAll}
              </button>
            )}

            <Row>
              {/*brands*/}
              <Col md={12} lg={12} className="border my-2">
                <FliterBrands
                  brands={Brands}
                  addFilter={addFilter}
                  setReff={setReff}
                />
              </Col>
              {/*brands*/}
              {/*categories*/}
              <Col md={12} lg={12} className="border my-2">
                <FilterCategory Categories={Categories} addFilter={addFilter} />
              </Col>
              {/*categories*/}
              {/* price */}
              <Col md={12} lg={12} className="border my-2">
                <FilterPrice price={Price} addFilter={addFilter} />
              </Col>
              {/* price */}
              {/* color */}
              <Col md={12} lg={12} className="border my-2">
                <FilterColors Color={Color} addFilter={addFilter} />
              </Col>
              {/* color */}
              {/* discount */}
              <Col md={12} lg={12} className="border my-2">
                <FilterDiscount Discount={Discount} addFilter={addFilter} />
              </Col>
              {/* discount */}
            </Row>
            {/*side part*/}
          </Col>
          {/* ========================================================= */}
          {/*main part*/}
          <Col md={10} id="select_capsul">
            <Row>
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
                <SortByFilter SortBy={SortBy} addFilter={addFilter} />
              </Col>
            </Row>
            {/* shirts data cards */}
            <Row className="mt-3">
              {shirtsState && <ProductCard data={shirtsState} />}
            </Row>
            {/* shirts data cards */}
          </Col>
          {/*main part*/}
        </Row>
      </Container>
    </>
  );
};

export default memo(ShirtsPage);
