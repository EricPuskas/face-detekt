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
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        loading: false,
        master_loader: false,
        isAuthenticated: !isEmpty(payload),
        user: payload
      };
    case GET_PROFILE:
      return {
        ...state,
        user: { ...state.user, ...payload }
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
