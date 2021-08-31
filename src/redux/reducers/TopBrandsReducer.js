const initialState = {
  myData: [
    {
      id: 5,
      name: "vijay",
      role: "web dev",
    },
  ],
};

const TopBrandsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "TOP_BRANDS":
      return { ...state, productData: payload };
    default:
      return state;
  }
};

export default TopBrandsReducer;
