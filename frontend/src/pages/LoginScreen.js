import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/reducers/authReducer";

const LoginScreen = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const dispatch = useDispatch();
  const { auth, alert } = useSelector((state) => state);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(userData));
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
          <strong className="input__container__label">Email Id</strong>
          <input
            type="email"
            onChange={handleChangeInput}
            value={email}
            name="email"
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

        <button className="action__button__container" type="submit">
          <p>Continue</p>
        </button>

        <p className="form__container__text2">
          By continuing, you agree to Musicart privacy notice and conditions of
          use.
        </p>
      </div>

      <p className="special__text">New to Musicart</p>

      <p className="form__container__text4">
        <Link to="/signup">Create your Musicart account</Link>
      </p>
    </form>
  );
};

export default LoginScreen;
