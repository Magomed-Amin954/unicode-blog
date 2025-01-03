import { GET_CATECORIES } from "../constants";

const initialState = {
  categories: [],
};

export const categoryReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATECORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};


