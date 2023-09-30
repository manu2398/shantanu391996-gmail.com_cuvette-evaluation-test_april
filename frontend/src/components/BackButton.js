import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
const BackButton = ({ title, to }) => {
  return (
    <div className="product__backbutton">
      <Link to={to} className="product__backbutton__hide">
        <p>{title}</p>
      </Link>
      <Link to={to}>
        <div className="product__backbutton__icon">
          <BiArrowBack />
        </div>
      </Link>
    </div>
  );
};

export default BackButton;
