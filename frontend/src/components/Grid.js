import React from "react";
import { BiCartDownload } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/reducers/authReducer";

const Grid = ({ item }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToCart(item));
  };
  return (
    <div className="grid__container">
      <div className="card__container__imagecontainer">
        <img alt="image" src={item.cover} />
        <div className="card__container__cart" onClick={handleAdd}>
          <BiCartDownload className="card__container__icon" />
        </div>
      </div>

      <div className="grid__container__text">
        <h2>{item.name}</h2>
        <h3>Price - ₹ {item.price.toLocaleString()}</h3>
        <h3>
          {item.color} | {item.headphoneType}
        </h3>
        <h5>{item.description}</h5>
        <div className="grid__container__text__button">
          <Link to={`/product/${item._id}`}>
            <p>Details</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Grid;
