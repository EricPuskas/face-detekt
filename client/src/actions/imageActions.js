import axios from "axios";
import {
  DETECT_FACES,
  GET_ERRORS,
  CLEAR_ERRORS,
  DETECT_FACES_LOADING,
  DETECT_FACES_STOP_LOADING
} from "./types";

// Register User
export const detectFaces = (id, data) => async dispatch => {
  try {
    dispatch(DetectFacesLoading());
    let res = await axios.post(`/api/image/${id}`, data);
    dispatch({
      type: DETECT_FACES,
      payload: res.data
    });
  } catch (err) {
    dispatch(StopDetectFacesLoading());
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
    errors: {}
  };
};

export const DetectFacesLoading = () => {
  return {
    type: DETECT_FACES_LOADING
  };
};

export const StopDetectFacesLoading = () => {
  return {
    type: DETECT_FACES_STOP_LOADING
  };
};
