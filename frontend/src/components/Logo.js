import React from "react";
import logo from "../assets/image 4.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="navbar__logo">
      <img alt="logo" src={logo} className="navbar__logo__img " />
      <Link to={"/"}>
        <h1>Musicart</h1>
      </Link>
    </div>
  );
};

export default Logo;
