import './Navbar.scss'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategory } from "../../../store/actions/categoryAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const category = useSelector(
    (state) => console.log({ state }) || state.category.categories
  );

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div className="Navbar">
      {category?.map((article) => (
        <Link to={`/category/${article._id}`}>
          <button className="Map-Category">{article.title}</button>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
