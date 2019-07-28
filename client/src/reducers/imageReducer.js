import {
  DETECT_FACES,
  DETECT_FACES_LOADING,
  DETECT_FACES_STOP_LOADING
} from "../actions/types";

const initialState = {
  data: "",
  loading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DETECT_FACES:
      return {
        ...state,
        loading: false,
        data: payload
      };
    case DETECT_FACES_LOADING:
      return {
        ...state,
        loading: true
      };
    case DETECT_FACES_STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
