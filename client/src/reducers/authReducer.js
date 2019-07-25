import {
  SET_CURRENT_USER,
  LOADING,
  STOP_LOADING,
  AUTH_LOADING,
  STOP_AUTH_LOADING,
  GET_PROFILE
} from "../actions/types";
import isEmpty from "../utils/isEmpty";

const initialState = {
  isAuthenticated: false,
  loading: false,
  master_loader: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        loading: false,
        master_loader: false,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case GET_PROFILE:
      return {
        ...state,
        user: action.payload
      };
    case LOADING:
      return {
        ...state,
        master_loader: true
      };
    case STOP_LOADING:
      return {
        ...state,
        master_loader: false
      };
    case AUTH_LOADING:
      return {
        ...state,
        loading: true
      };
    case STOP_AUTH_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
