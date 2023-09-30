import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__container__left">
        <h1>Grab upto 50% off on Selected headphones</h1>
        <div className="hero__container__left__button">
          <p>Buy Now</p>
        </div>
      </div>

      <img alt="hero_img" src={hero} className="hero__container__right" />
    </div>
  );
};

export default Hero;
