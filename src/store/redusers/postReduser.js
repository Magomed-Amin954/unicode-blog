import { GET_POST } from "../constants";

const initialState = {
  posts: [],
};

export const postReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
