import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import imageReducer from "./imageReducer";

export default combineReducers({
  auth: authReducer,
  image: imageReducer,
  errors: errorReducer
});
