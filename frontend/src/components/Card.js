import React from "react";
import { BiCartDownload } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/reducers/authReducer";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className="card__container">
      <div className="card__container__imagecontainer">
        <img alt="image" src={item.cover} />
        <div className="card__container__cart" onClick={handleAdd}>
          <BiCartDownload className="card__container__icon" />
        </div>
      </div>
      <div className="card__container__text">
        <Link to={`/product/${item._id}`}>
          <p>{item.name}</p>
          <p>Price - ₹ {item.price.toLocaleString()}</p>
          <p>
            {item.color} | {item.headphoneType}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
