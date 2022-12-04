// PACKAGE
import axios from "axios";

// IMPORT: CONSTANTS
import {
  FEATURED_LISTING_REQUEST,
  FEATURED_LISTING_SUCCESS,
  FEATURED_LISTING_FAIL,
} from "../constants/propertyListConstants";

export const fetchListings = () => async (dispatch) => {
  try {
    dispatch({
      type: FEATURED_LISTING_REQUEST,
    });

    const res = await axios.get("/api/properties/listings");

    const filteredProperty1 = res.data.filter(
      (eachListing) => eachListing.name === "Fountain Views"
    );
    const filteredProperty2 = res.data.filter(
      (eachListing) => eachListing.name === "One Palm"
    );
    const filteredProperty3 = res.data.filter(
      (eachListing) => eachListing.name === "Parkway Vistas"
    );

    const listingArray = [
      ...filteredProperty1,
      ...filteredProperty2,
      ...filteredProperty3,
    ];

    dispatch({
      type: FEATURED_LISTING_SUCCESS,
      payload: listingArray,
    });
  } catch (error) {
    dispatch({
      type: FEATURED_LISTING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
