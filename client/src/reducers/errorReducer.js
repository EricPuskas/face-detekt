import { GET_ERRORS, ERROR_LOADING, CLEAR_ERRORS } from "../actions/types";
const initialState = {
  error: "",
  error_loading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ERRORS:
      return {
        error: payload,
        error_loading: false
      };
    case ERROR_LOADING:
      return {
        ...state,
        error_loading: true
      };
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
}
