import React from "react";

import { Link, useLocation, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "./Logo";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { auth } = useSelector((state) => state);
  const location = useLocation();
  const qty = auth.user.cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <div className="navbar__container">
      <Logo />

      <ul className="navbar__links__container">
        <li className="navbar__links__item">
          <Link to={"/"}>Home {location.pathname}</Link>
        </li>
      </ul>

      <div className="navbar__cart">
        <AiOutlineShoppingCart />
        <Link to={"/cart"}>{<p>{qty}</p>}</Link>
      </div>
    </div>
  );
};

export default Navbar;
