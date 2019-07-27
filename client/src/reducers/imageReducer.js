import { DETECT_FACES } from "../actions/types";

const initialState = {
  data: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DETECT_FACES:
      return {
        data: payload
      };
    default:
      return state;
  }
}
