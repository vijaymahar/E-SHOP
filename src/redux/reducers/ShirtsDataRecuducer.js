const ShirtsDataReducer = (
  state = { name: "shirts_page" },
  { type, payload }
) => {
  switch (type) {
    case "SHIRTS_DATA":
      return { ...state, shirtsData: payload };
    default:
      return state;
  }
};
export default ShirtsDataReducer;
