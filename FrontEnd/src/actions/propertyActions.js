// PACKAGE
import axios from "axios";

// IMPORT: CONSTANTS
import {
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
  PROPERTY_DETAILS_REQUEST,
  PROPERTY_DETAILS_SUCCESS,
  PROPERTY_DETAILS_FAIL,
  PROPERTY_DELETE_REQUEST,
  PROPERTY_DELETE_SUCCESS,
  PROPERTY_DELETE_FAIL,
  PROPERTY_CREATE_REQUEST,
  PROPERTY_CREATE_SUCCESS,
  PROPERTY_CREATE_FAIL,
  PROPERTY_UPDATE_REQUEST,
  PROPERTY_UPDATE_SUCCESS,
  PROPERTY_UPDATE_FAIL,
} from "../constants/propertyConstants";

export const fetchProperties = () => async (dispatch) => {
  try {
    dispatch({
      type: PROPERTY_LIST_REQUEST,
    });

    const res = await axios.get("/api/properties");

    dispatch({
      type: PROPERTY_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROPERTY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const fetchPropertyDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PROPERTY_DETAILS_REQUEST,
    });

    const res = await axios.get(`/api/properties/${id}`);

    dispatch({
      type: PROPERTY_DETAILS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROPERTY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

// export const deleteProperty = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: PROPERTY_DELETE_REQUEST,
//     });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     await axios.delete(`/api/properties/${id}`, config);

//     dispatch({
//       type: PROPERTY_DELETE_SUCCESS,
//     });
//   } catch (error) {
//     dispatch({
//       type: PROPERTY_DELETE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.response,
//     });
//   }
// };

// export const createProperty = () => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: PROPERTY_CREATE_REQUEST,
//     });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const res = await axios.post(`/api/properties`, {}, config);

//     dispatch({
//       type: PROPERTY_CREATE_SUCCESS,
//       payload: res.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PROPERTY_CREATE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.response,
//     });
//   }
// };

// export const updateProperty = (property) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: PROPERTY_UPDATE_REQUEST,
//     });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const res = await axios.put(
//       `/api/properties/${property._id}`,
//       property,
//       config
//     );

//     dispatch({
//       type: PROPERTY_UPDATE_SUCCESS,
//       payload: res.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PROPERTY_UPDATE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.response,
//     });
//   }
// };
