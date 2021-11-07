// import { createStore } from "redux";
// import rootReducer from "../reducers/RootReducer";

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

// ==============================
// ADWANCE STORE SETUP
// ==============================

import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk"; //MIDDLEWARE

import rootReducer from "../reducers/RootReducer"; //ROOTREDUCER

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
