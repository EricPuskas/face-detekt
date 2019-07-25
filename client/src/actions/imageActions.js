import axios from "axios";
import { DETECT_FACES, GET_ERRORS } from "./types";

// Register User
export const detectFaces = (id, data) => async dispatch => {
  try {
    let res = await axios.post(`/api/image/${id}`, data);
    dispatch({
      type: DETECT_FACES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
