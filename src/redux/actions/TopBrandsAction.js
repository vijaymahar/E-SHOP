import axios from "axios";

// const TopBrandsAction = (products) => {
//   return {
//     type: "TOP_BRANDS",
//     payload: products,
//   };
// };
// export default TopBrandsAction;

// adwance setup

const fetchAllProducts = () => async (dispatch) => {
  const response = await axios
    .get("http://localhost:3005/foot-wear")
    .catch((error) => console.log(error));

  dispatch({
    type: "TOP_BRANDS",
    payload: response.data,
  });
};

export default fetchAllProducts;
