import {
  FEATURED_LISTING_REQUEST,
  FEATURED_LISTING_SUCCESS,
  FEATURED_LISTING_FAIL,
} from "../constants/propertyListConstants";

export const featuredListReducer = (state = { listings: [] }, action) => {
  switch (action.type) {
    case FEATURED_LISTING_REQUEST:
      return { loading: true, listings: [] };
    case FEATURED_LISTING_SUCCESS:
      return { loading: false, listings: action.payload };
    case FEATURED_LISTING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
