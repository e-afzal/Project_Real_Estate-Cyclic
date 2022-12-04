// PACKAGES
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// REDUCERS
import { featuredListReducer } from "./reducers/listingReducers";
import {
  propertyListReducer,
  propertyDetailsReducer,
  propertyDeleteReducer,
  propertyCreateReducer,
  propertyUpdateReducer,
} from "./reducers/propertyReducers";

const reducer = combineReducers({
  featuredList: featuredListReducer,

  propertyList: propertyListReducer,
  propertyDetails: propertyDetailsReducer,
  propertyDelete: propertyDeleteReducer,
  propertyCreate: propertyCreateReducer,
  propertyUpdate: propertyUpdateReducer,
});

// To load in 'INITIAL STATE', upon fetching userInfo when doing "login" action
// Then added to 'INITIAL STATE' in 'SETUP'
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// SETUP
const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
