import { DETECT_FACES } from "../actions/types";

const initialState = {
  data: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DETECT_FACES:
      return {
        data: action.payload
      };
    default:
      return state;
  }
}
