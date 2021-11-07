const initialState = [
  {
    type: "product_details",
    status: "sucess",
  },
];
const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "PRODUCT_ITEM":
      return { ...state, productData: payload };
    default:
      return state;
  }
};
export default ProductReducer;
