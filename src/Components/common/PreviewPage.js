import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import fetchItemDetails from "../../redux/actions/ProductAction";
import axios from "axios";
const PreviewPage = () => {
  const respo = useSelector((state) => state.ProductReducer.productData);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [state, setState] = useState();
  console.log("from api :", state);
  console.log("from redux-store :", respo);
  const fetchData = async () => {
    const response = await axios
      .get(`http://localhost:3005/shirts1/${productId}`)
      .catch((error) => console.log(error));
    setState(response.data);
  };
  useEffect(() => {
    dispatch(fetchItemDetails(productId));
    fetchData();
    // fetch(`http://localhost:3005/shirts1/${productId}`)
    //   .then((res) => res.json())
    //   .then((res) => setState(res))
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Container>
        <h1>welcome </h1>
        {/* <p>{state.id}</p> */}
        {/* <img
          src={respo.image}
          alt={respo.name}
          className="img-fluid w-100 h-auto"
        />
        <p>name : {state.name}</p>
        <p>price: {state.price}</p> */}
      </Container>
    </>
  );
};

export default PreviewPage;
