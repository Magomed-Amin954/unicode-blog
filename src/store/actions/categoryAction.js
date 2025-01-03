import { GET_CATECORIES } from "../constants";
import axios from "axios";

export const fetchCategory = () => {
  return (dispatch) => {
    axios

      .get("https://zelim-blog.onrender.com/categories")
      .then((response) => response.data)
      .then((data) => dispatch(addCategoryAction(data)));
  };
};

export const addCategoryAction = (payload) => ({
  type: GET_CATECORIES,
  payload,
});
