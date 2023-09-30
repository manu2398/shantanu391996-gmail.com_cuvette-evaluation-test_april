import React from "react";
import BackButton from "../components/BackButton";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateItemQty } from "../store/reducers/authReducer";
import { useNavigate } from "react-router-dom";

const CartScreen = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = auth?.user;

  const qty = cartItems.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.item.price,
    0
  );

  const handleRemove = (item) => {
    dispatch(removeFromCart(item.prodId));
  };

  const updateQty = (e, item) => {
    dispatch(updateItemQty(item.prodId, parseInt(e.target.value)));
  };

  return (
    <div className="cart">
      <BackButton title={"Back to Products"} to="/" />

      <div className="cart__text">
        <BiShoppingBag />
        <p>My Cart</p>
      </div>

      {cartItems.length > 0 && (
        <div className="cart__container">
          <div className="cart__container__left">
            <hr className="hidden__item" />
            {cartItems.map((item) => (
              <div className="cart__container__left__box">
                {/* img */}
                <div className="cart__cover__container">
                  <img src={item.item.cover} />
                </div>
                {/* desc */}
                <div className="cart__left__desc">
                  <h3>{item.item.name}</h3>
                  <p>Color : {item.item.color}</p>
                  <p>In Stock</p>
                </div>

                {/* price */}
                <div className="cart__left__desc hidden__item">
                  <h3>Price</h3>
                  <p>₹{item.item.price.toLocaleString()}</p>
                </div>

                {/* qty */}
                <div className="cart__left__desc hidden__item">
                  <h3>Quantity</h3>
                  <select
                    name="qty"
                    id=""
                    defaultValue={item.qty}
                    onChange={(e) => updateQty(e, item)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                {/* total */}
                <div className="cart__left__desc price__abs ">
                  <h3>Total</h3>
                  <p>₹{(item.qty * item.item.price).toLocaleString()}</p>
                </div>

                {/* remove */}
                <div
                  className="cart__left__desc price__abs delete__icon"
                  onClick={() => handleRemove(item)}
                >
                  <AiOutlineDelete color="red" />
                </div>
              </div>
            ))}
            <hr className="hr__margin" />
            <div className="cart__left__bottom hidden__item">
              <p>{qty} Items</p>
              <p>₹{totalPrice.toLocaleString()}</p>
            </div>
          </div>

          <div className="cart__container__right">
            {/* top section */}
            <div className="right__top__section hidden__item">
              <p>PRICE DETAILS</p>

              <div className="cart__container__right__row hidden__item">
                <p>Total MRP</p>
                <p>₹{totalPrice.toLocaleString()}</p>
              </div>

              <div className="cart__container__right__row hidden__item">
                <p>Discount on MRP</p>
                <p>₹0</p>
              </div>

              <div className="cart__container__right__row hidden__item">
                <p>Convenience Fee</p>
                <p>₹45</p>
              </div>
            </div>

            {/* bottom section */}
            <div className="right__bottom__section">
              <p className="hide__big">Convenience fee ₹45</p>
              <div className="cart__container__right__row">
                <p>Total Amount</p>
                <p>₹{(totalPrice + 45).toLocaleString()}</p>
              </div>

              <button
                className="right__bottom__button"
                onClick={() =>
                  auth?.token ? navigate("/checkout") : navigate("/login")
                }
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
