import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../store/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";

const SignUpScreen = () => {
  const initialState = { email: "", password: "", phoneNumber: "", name: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password, phoneNumber, name } = userData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth, alert } = useSelector((state) => state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    if (auth?.token) navigate("/");
  }, [auth?.token, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <Logo />
      <div className="form__container">
        <p className="form__container__heading">Create Account</p>
        {!alert?.success && (
          <p style={{ color: "crimson", margin: "5px 0px", fontSize: "10px" }}>
            {alert?.error?.message}
          </p>
        )}
        <div className="input__container">
          <strong className="input__container__label">Your Name</strong>
          <input
            name="name"
            type="text"
            onChange={handleChangeInput}
            value={name}
          />
        </div>

        <div className="input__container">
          <strong className="input__container__label">Mobile No</strong>
          <input
            name="phoneNumber"
            type="number"
            onChange={handleChangeInput}
            value={phoneNumber}
          />
        </div>
        <div className="input__container">
          <strong className="input__container__label">Email Id</strong>
          <input
            name="email"
            type="email"
            onChange={handleChangeInput}
            value={email}
          />
        </div>
        <div className="input__container">
          <strong className="input__container__label">Password</strong>
          <input
            name="password"
            type="password"
            onChange={handleChangeInput}
            value={password}
          />
        </div>

        <p className="form__container__text">
          By enrolling your mobile phone number, you consent to receive
          automated security notifications via text message from Musicart.
          Message and data rates may apply.
        </p>

        <button className="action__button__container" type="submit">
          <p>Continue</p>
        </button>

        <p className="form__container__text2">
          By continuing, you agree to Musicart privacy notice and conditions of
          use.
        </p>
      </div>

      <p className="form__container__text3">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </form>
  );
};

export default SignUpScreen;
