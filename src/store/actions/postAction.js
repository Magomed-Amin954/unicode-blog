import { GET_POSTS } from "../constants";
import axios from "axios";

export const fethPosts = () => {
  return (dispatch) => {
    axios
      .get("https://zelim-blog.onrender.com/posts")
      .then((response) => response.data)
      .then((data) => dispatch(addPostsAction(data)));
  };
};
export const addPostsAction = (payload) => ({
  type: GET_POSTS,
  payload,
});
