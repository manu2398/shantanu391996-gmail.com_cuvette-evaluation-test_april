import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SuccessScreen = () => {
  const { auth } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.token) navigate("/cart");
  }, [auth?.token, navigate]);

  return (
    <div className="container__success">
      <div className="success__container">
        <p className="success__emoji">🎉</p>
        <h3>Order is Placed successfully!</h3>
        <p className="success_p">
          You will be receiving a confirmation email with order details
        </p>

        <BackButton to="/" title="Go Back to Home Page" />
      </div>
    </div>
  );
};

export default SuccessScreen;
