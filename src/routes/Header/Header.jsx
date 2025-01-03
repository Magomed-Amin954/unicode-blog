import React from "react";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import './Header.scss'
const Header = () => {
  return (
    <div className="Header">
      <div className="Header__container">
        <Link className="Header__link" to={"/"}>
          <div className="Header__name">
            <div className="Header__head">THE</div>
            <h1 className="Header__heading">Unicode</h1>
          </div>
        </Link>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
