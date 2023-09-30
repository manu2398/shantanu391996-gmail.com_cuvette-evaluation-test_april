import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/reducers/authReducer";

const Header = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container__item">
          <BiPhoneCall className="header__container__icon" />
          <h6>+919999999999</h6>
        </div>

        <h6>Get 50% off on selected items | Shop Now</h6>

        {auth?.token ? (
          <h6 style={{ cursor: "pointer" }} onClick={() => dispatch(logout())}>
            Logout
          </h6>
        ) : (
          <Link to={"/login"}>
            <h6>Login | Sign Up</h6>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
