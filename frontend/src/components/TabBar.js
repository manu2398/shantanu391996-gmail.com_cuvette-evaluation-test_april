import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCartDownload, BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../store/reducers/authReducer";

const TabBar = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const qty = auth.user.cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <div className="tabbar">
      <div className="tabbar__container">
        <NavLink to={"/"}>
          <AiOutlineHome />
          <p>Home</p>
        </NavLink>
      </div>
      <div className="tabbar__container">
        <NavLink to={"/cart"}>
          <BiCartDownload />
          <p>Cart ({qty})</p>
        </NavLink>
      </div>
      <div className="tabbar__container">
        {auth?.token ? (
          <div onClick={() => dispatch(logout())} style={{ cursor: "pointer" }}>
            <BiUser />
            <p>Logout</p>
          </div>
        ) : (
          <NavLink to={"/login"}>
            <BiUser />
            <p>Login</p>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default TabBar;
