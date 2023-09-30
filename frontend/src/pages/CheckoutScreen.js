import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/reducers/authReducer";

const CheckoutScreen = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = auth?.user;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.item.price,
    0
  );

  useEffect(() => {
    if (!auth?.token) navigate("/cart");
  }, [auth?.token, navigate]);

  return (
    <div>
      <BackButton title={"Back to Cart"} to="/cart" />

      <h2 className="checkout__heading">Checkout</h2>

      <div className="checkout__container">
        <div className="checkout__container__left">
          <ol className="checkout__container__left__list">
            <li className="checkout__container__left__list__item">
              <h4>1. Delivery Address</h4>
              <p>
                Akash Patel <br />
                104 kk hh nagar, Lucknow Uttar Pradesh 226025
              </p>
            </li>
            <hr />
            <li className="checkout__container__left__list__item">
              <h4>2. Payment method</h4>
              <p>Pay on delivery ( Cash/Card)</p>
            </li>
            <hr />
            <li className="checkout__container__left__list__item">
              <h4>3. Review items and delivery</h4>
              <div>
                <div className="checkout__products">
                  {cartItems.map((item) => (
                    <div style={{ marginBottom: "20px" }}>
                      <div className="cart__cover__container">
                        <img src={item.item.cover} />
                      </div>
                      {/* desc */}
                      <div className="cart__left__desc">
                        <h3>{item.item.name}</h3>
                        <p>Color : {item.item.color}</p>
                        <p>In Stock</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: "20px" }}>
                  Estimated delivery : <br />
                  Monday — FREE Standard Delivery
                </p>
              </div>
            </li>
            <hr />
          </ol>

          <div className="checkout__bottombox">
            <button
              className="checkout__bottombox__button"
              onClick={() => {
                navigate("/success");
                dispatch(clearCart());
              }}
            >
              Place your order
            </button>
            <div className="checkout__bottombox__right">
              <h4 className="checkout__bottombox__h4">
                Order Total : ₹{(totalPrice + 45).toLocaleString()}
              </h4>
              <p className="checkout__bottombox__p">
                By placing your order, you agree to Musicart privacy notice and
                conditions of use.
              </p>
            </div>
          </div>
        </div>
        <div className="checkout__container__right">
          <button
            className="checkout__bottombox__button"
            onClick={() => {
              navigate("/success");
              dispatch(clearCart());
            }}
          >
            Place your order
          </button>
          <p className="checkout__bottombox__p">
            By placing your order, you agree to Musicart privacy notice and
            conditions of use.
          </p>
          <hr />

          <h3>Order Summary</h3>

          <div className="checkout__right__items">
            <p>Items: </p>
            <p>₹{totalPrice.toLocaleString()}</p>
          </div>

          <div className="checkout__right__items">
            <p>Delivery: </p>
            <p>₹45</p>
          </div>

          <hr />

          <h4 className="checkout__bottombox__h4 addPadding">
            Order Total : ₹{(totalPrice + 45).toLocaleString()}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;
