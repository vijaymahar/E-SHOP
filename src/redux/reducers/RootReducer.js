import { combineReducers } from "redux";
import TopBrandsReducer from "./TopBrandsReducer";
import ShirtsDataReducer from "./ShirtsDataRecuducer";
import ProductReducer from "./ProductReducer";
const rootReducer = combineReducers({
  TopBrandsReducer,
  ShirtsDataReducer,
  ProductReducer,
});

export default rootReducer;
